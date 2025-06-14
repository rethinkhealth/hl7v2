# Error Handling

**Current Implementation:**
```typescript
try {
  const message = client.parse('MSH|^~\\&|HOSP|FAC|APP|FAC|20200508130643||ADT^A01|5|T|2.3');
} catch (error) {
  if (error instanceof SegmentError) {
    console.error(error.message); 
    // Output: "Error in segment MSH: MSH segment must be at least 8 characters long"
  }
}
```

**Enhanced Error Handling:**
```typescript
// First, define parsing options
const options: ParseOptions = {
  strict: false,  // Don't throw on first error
  maxErrors: 10,  // Collect up to 10 errors
  continueOnError: true  // Continue parsing after errors
};

try {
  const result = await client.parseAsync('MSH|^~\\&|HOSP|FAC|APP|FAC|20200508130643||ADT^A01|5|T|2.3', options);
  
  // Check for parsing issues
  if (result.hasErrors()) {
    console.log('Message parsed with errors:');
    
    // Get all errors with detailed context
    for (const error of result.errors) {
      console.log(`
Error Type: ${error.type}
Location: ${error.location.segment}.${error.location.field || ''}.${error.location.component || ''}
Line: ${error.location.line}, Column: ${error.location.column}
Message: ${error.message}
Context: ${error.context}
Raw Value: ${error.rawValue}
Expected Format: ${error.expectedFormat || 'N/A'}
      `);
    }
    
    // Example output:
    /*
    Error Type: FIELD_ERROR
    Location: MSH.9
    Line: 1, Column: 45
    Message: Invalid message type format
    Context: Message type should be in format 'XXX^YYY'
    Raw Value: ADT^A01
    Expected Format: ^ separated components
    
    Error Type: COMPONENT_ERROR
    Location: MSH.9.2
    Line: 1, Column: 49
    Message: Invalid message trigger
    Context: Message trigger should be a valid code from table 0003
    Raw Value: A01
    Expected Format: Valid message trigger code
    */
  }
  
  // Access the parsed message even if there were errors
  const message = result.message;
  
  // Get validation results
  const validation = await message.validate({
    version: '2.8',
    messageType: 'ADT^A01',
    strict: true
  });
  
  if (!validation.isValid) {
    console.log('Validation issues:');
    for (const warning of validation.warnings) {
      console.log(`
Warning: ${warning.message}
Location: ${warning.location.segment}.${warning.location.field || ''}
Severity: ${warning.severity}
      `);
    }
  }
  
} catch (error) {
  if (error instanceof ParseError) {
    // Handle critical errors that prevented parsing
    console.error(`
Critical Error:
Type: ${error.type}
Location: ${error.location.segment}
Line: ${error.location.line}
Message: ${error.message}
Context: ${error.context}
    `);
  }
}
```

Key improvements in the enhanced error handling:

1. **Detailed Error Context**
   - Line and column numbers for precise error location
   - Raw value that caused the error
   - Expected format or valid values
   - Context about why the error occurred

2. **Error Recovery**
   - Option to continue parsing after errors
   - Collection of multiple errors instead of stopping at first error
   - Access to partially parsed message even with errors

3. **Validation Integration**
   - Separate validation step with warnings
   - Version-specific validation
   - Severity levels for issues

4. **Better Error Types**
   - More specific error categories
   - Hierarchical error structure (segment -> field -> component)
   - Clear distinction between parsing errors and validation issues

5. **Error Reporting**
   - Structured error objects for programmatic handling
   - Human-readable error messages
   - Contextual information for debugging

This enhanced error handling would make it much easier for users to:
- Debug parsing issues
- Understand why errors occurred
- Handle errors gracefully
- Validate messages against standards
- Integrate with error reporting systems
