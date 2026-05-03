// Generated table profile for 0003 (v2.4)

export const id = "0003";
export const description = "Event type";
export const type = "hl7";
export const codes = [
  { description: "ADT/ACK - Admit/visit notification", name: "A01" },
  { description: "ADT/ACK - Transfer a patient", name: "A02" },
  { description: "ADT/ACK -  Discharge/end visit", name: "A03" },
  { description: "ADT/ACK -  Register a patient", name: "A04" },
  { description: "ADT/ACK -  Pre-admit a patient", name: "A05" },
  {
    description: "ADT/ACK -  Change an outpatient to an inpatient",
    name: "A06",
  },
  {
    description: "ADT/ACK -  Change an inpatient to an outpatient",
    name: "A07",
  },
  { description: "ADT/ACK -  Update patient information", name: "A08" },
  { description: "ADT/ACK -  Patient departing - tracking", name: "A09" },
  { description: "ADT/ACK -  Patient arriving - tracking", name: "A10" },
  { description: "ADT/ACK -  Cancel admit/visit notification", name: "A11" },
  { description: "ADT/ACK -  Cancel transfer", name: "A12" },
  { description: "ADT/ACK -  Cancel discharge/end visit", name: "A13" },
  { description: "ADT/ACK -  Pending admit", name: "A14" },
  { description: "ADT/ACK -  Pending transfer", name: "A15" },
  { description: "ADT/ACK -  Pending discharge", name: "A16" },
  { description: "ADT/ACK -  Swap patients", name: "A17" },
  {
    description:
      "ADT/ACK -  Merge patient information (for backward compatibility only)",
    name: "A18",
  },
  { description: "QRY/ADR -  Patient query", name: "A19" },
  { description: "ADT/ACK -  Bed status update", name: "A20" },
  {
    description: 'ADT/ACK -  Patient goes on a "leave of absence"""',
    name: "A21",
  },
  {
    description: 'ADT/ACK -  Patient returns from a "leave of absence"""',
    name: "A22",
  },
  { description: "ADT/ACK -  Delete a patient record", name: "A23" },
  { description: "ADT/ACK -  Link patient information", name: "A24" },
  { description: "ADT/ACK -  Cancel pending discharge", name: "A25" },
  { description: "ADT/ACK -  Cancel pending transfer", name: "A26" },
  { description: "ADT/ACK -  Cancel pending admit", name: "A27" },
  { description: "ADT/ACK -  Add person information", name: "A28" },
  { description: "ADT/ACK -  Delete person information", name: "A29" },
  {
    description:
      "ADT/ACK -  Merge person information (for backward compatibility only)",
    name: "A30",
  },
  { description: "ADT/ACK -  Update person information", name: "A31" },
  { description: "ADT/ACK -  Cancel patient arriving - tracking", name: "A32" },
  {
    description: "ADT/ACK -  Cancel patient departing - tracking",
    name: "A33",
  },
  {
    description:
      "ADT/ACK -  Merge patient information - patient ID only (for backward compatibility only)",
    name: "A34",
  },
  {
    description:
      "ADT/ACK -  Merge patient information - account number only (for backward compatibility only)",
    name: "A35",
  },
  {
    description:
      "ADT/ACK -  Merge patient information - patient ID and account number (for backward compatibility only)",
    name: "A36",
  },
  { description: "ADT/ACK -  Unlink patient information", name: "A37" },
  { description: "ADT/ACK - Cancel pre-admit", name: "A38" },
  {
    description:
      "ADT/ACK - Merge person - patient ID (for backward compatibility only)",
    name: "A39",
  },
  {
    description: "ADT/ACK - Merge patient - patient identifier list",
    name: "A40",
  },
  {
    description: "ADT/ACK - Merge account - patient account number",
    name: "A41",
  },
  { description: "ADT/ACK - Merge visit - visit number", name: "A42" },
  {
    description: "ADT/ACK - Move patient information - patient identifier list",
    name: "A43",
  },
  {
    description: "ADT/ACK - Move account information - patient account number",
    name: "A44",
  },
  {
    description: "ADT/ACK - Move visit information - visit number",
    name: "A45",
  },
  {
    description:
      "ADT/ACK - Change patient ID (for backward compatibility only)",
    name: "A46",
  },
  { description: "ADT/ACK - Change patient identifier list", name: "A47" },
  {
    description:
      "ADT/ACK - Change alternate patient ID (for backward compatibility only)",
    name: "A48",
  },
  { description: "ADT/ACK - Change patient account number", name: "A49" },
  { description: "ADT/ACK - Change visit number", name: "A50" },
  { description: "ADT/ACK - Change alternate visit ID", name: "A51" },
  {
    description: "ADT/ACK - Cancel leave of absence for a patient",
    name: "A52",
  },
  {
    description: "ADT/ACK - Cancel patient returns from a leave of absence",
    name: "A53",
  },
  { description: "ADT/ACK - Change attending doctor", name: "A54" },
  { description: "ADT/ACK - Cancel change attending doctor", name: "A55" },
  { description: "ADT/ACK -  Update allergy information", name: "A60" },
  { description: "ADT/ACK - Change consulting doctor", name: "A61" },
  { description: "ADT/ACK - Cancel change consulting doctor", name: "A62" },
  { description: "PMU/ACK - Add personnel record", name: "B01" },
  { description: "PMU/ACK - Update personnel record", name: "B02" },
  { description: "PMU/ACK - Delete personnel re cord", name: "B03" },
  { description: "PMU/ACK - Active practicing person", name: "B04" },
  { description: "PMU/ACK - Deactivate practicing person", name: "B05" },
  { description: "PMU/ACK - Terminate practicing person", name: "B06" },
  { description: "CRM - Register a patient on a clinical trial", name: "C01" },
  {
    description:
      "CRM - Cancel a patient registration on clinical trial (for clerical mistakes only)",
    name: "C02",
  },
  { description: "CRM - Correct/update registration information", name: "C03" },
  { description: "CRM - Patient has gone off a clinical trial", name: "C04" },
  { description: "CRM - Patient enters phase of clinical trial", name: "C05" },
  {
    description: "CRM - Cancel patient entering a phase (clerical mistake)",
    name: "C06",
  },
  { description: "CRM - Correct/update phase information", name: "C07" },
  {
    description: "CRM - Patient has gone off phase of clinical trial",
    name: "C08",
  },
  {
    description: "CSU - Automated time intervals for reporting, like monthly",
    name: "C09",
  },
  { description: "CSU - Patient completes the clinical trial", name: "C10" },
  {
    description: "CSU - Patient completes a phase of the clinical trial",
    name: "C11",
  },
  {
    description: "CSU - Update/correction of patient order/result information",
    name: "C12",
  },
  { description: "RQI/RPI - Request for insurance information", name: "I01" },
  {
    description: "RQI/RPL - Request/receipt of patient selection display list",
    name: "I02",
  },
  {
    description: "RQI/RPR - Request/receipt of patient selection list",
    name: "I03",
  },
  {
    description: "RQD/RPI - Request for patient demographic data",
    name: "I04",
  },
  {
    description: "RQC/RCI - Request for patient clinical information",
    name: "I05",
  },
  {
    description: "RQC/RCL - Request/receipt of clinical data listing",
    name: "I06",
  },
  { description: "PIN/ACK - Unsolicited insurance information", name: "I07" },
  {
    description: "RQA/RPA - Request for treatment authorization information",
    name: "I08",
  },
  {
    description: "RQA/RPA - Request for modification to an authorization",
    name: "I09",
  },
  {
    description: "RQA/RPA - Request for resubmission of an authorization",
    name: "I10",
  },
  {
    description: "RQA/RPA - Request for cancellation of an authorization",
    name: "I11",
  },
  { description: "REF/RRI - Patient referral", name: "I12" },
  { description: "REF/RRI - Modify patient referral", name: "I13" },
  { description: "REF/RRI - Cancel patient referral", name: "I14" },
  { description: "REF/RRI - Request patient referral status", name: "I15" },
  { description: "QCN/ACK - Cancel query/acknowledge message", name: "J01" },
  {
    description: "QSX/ACK - Cancel subscription/acknowledge message",
    name: "J02",
  },
  { description: "RSP - Get person demographics response", name: "K21" },
  { description: "RSP - Find candidates response", name: "K22" },
  { description: "RSP - Get corresponding identifiers response", name: "K23" },
  { description: "RSP - Allocate identifiers response", name: "K24" },
  {
    description: "RSP - Personnel Information by Segment Response",
    name: "K25",
  },
  {
    description:
      "MFN/MFK - Master file not otherwise specified (for backward compatibility only)",
    name: "M01",
  },
  { description: "MFN/MFK - Master file - staff practitioner", name: "M02" },
  {
    description:
      "MFN/MFK - Master file - test/observation (for backward compatibility only)",
    name: "M03",
  },
  { description: "MFN/MFK - Master files charge description", name: "M04" },
  { description: "MFN/MFK - Patient location master file", name: "M05" },
  {
    description:
      "MFN/MFK - Clinical study with phases and schedules master file",
    name: "M06",
  },
  {
    description:
      "MFN/MFK - Clinical study without phases but with schedules master file",
    name: "M07",
  },
  {
    description: "MFN/MFK - Test/observation (numeric) master file",
    name: "M08",
  },
  {
    description: "MFN/MFK - Test/observation (categorical) master file",
    name: "M09",
  },
  {
    description: "MFN/MFK - Test /observation batteries master file",
    name: "M10",
  },
  {
    description: "MFN/MFK - Test/calculated observations master file",
    name: "M11",
  },
  { description: "MFN/MFK - Master file notification message", name: "M12" },
  {
    description: "NMQ/NMR - Application management query message",
    name: "N01",
  },
  {
    description: "NMD/ACK - Application management data message (unsolicited)",
    name: "N02",
  },
  { description: "ORM - Order message (also RDE, RDS, RGV, RAS)", name: "O01" },
  {
    description: "ORR - Order response (also RRE, RRD, RRG, RRA)",
    name: "O02",
  },
  { description: "OMD - Diet order", name: "O03" },
  { description: "ORD - Diet order acknowledgement", name: "O04" },
  { description: "OMS - Stock requisition order", name: "O05" },
  { description: "ORS - Stock requisition acknowledgement", name: "O06" },
  { description: "OMN - Non-stock requisition order", name: "O07" },
  { description: "ORN - Non-stock requisition acknowledgement", name: "O08" },
  { description: "OMP - Pharmacy/treatment order", name: "O09" },
  {
    description: "ORP - Pharmacy/treatment order acknowledgement",
    name: "O10",
  },
  { description: "RDE - Pharmacy/treatment encoded order", name: "O11" },
  {
    description: "RRE - Pharmacy/treatment encoded order acknowledgement",
    name: "O12",
  },
  { description: "RDS - Pharmacy/treatment dispense", name: "O13" },
  {
    description: "RRD - Pharmacy/treatment dispense acknowledgement",
    name: "O14",
  },
  { description: "RGV - Pharmacy/treatment give", name: "O15" },
  { description: "RRG - Pharmacy/treatment give acknowledgement", name: "O16" },
  { description: "RAS - Pharmacy/treatment administration", name: "O17" },
  {
    description: "RRA - Pharmacy/treatment administration acknowledgement",
    name: "O18",
  },
  { description: "OMG - General clinical order", name: "O19" },
  { description: "ORG/ORL - General clinical order response", name: "O20" },
  { description: "OML - Laboratory order", name: "O21" },
  { description: "BAR/ACK - Add patient accounts", name: "P01" },
  { description: "BAR/ACK - Purge patient accounts", name: "P02" },
  { description: "DFT/ACK - Post detail financial transaction", name: "P03" },
  { description: "QRY/DSP - Generate bill and A/R statements", name: "P04" },
  { description: "BAR/ACK - Update account", name: "P05" },
  { description: "BAR/ACK - End account", name: "P06" },
  {
    description:
      "PEX - Unsolicited initial individual product experience report",
    name: "P07",
  },
  {
    description:
      "PEX - Unsolicited update individual product experience report",
    name: "P08",
  },
  { description: "SUR - Summary product experience report", name: "P09" },
  {
    description: "BAR/ACK -Transmit  Ambulatory Payment  Classification(APC)",
    name: "P10",
  },
  { description: "PPR - PC/ problem add", name: "PC1" },
  { description: "PPR - PC/ problem update", name: "PC2" },
  { description: "PPR - PC/ problem delete", name: "PC3" },
  { description: "QRY - PC/ problem query", name: "PC4" },
  { description: "PRR - PC/ problem response", name: "PC5" },
  { description: "PGL - PC/ goal add", name: "PC6" },
  { description: "PGL - PC/ goal update", name: "PC7" },
  { description: "PGL - PC/ goal delete", name: "PC8" },
  { description: "QRY - PC/ goal query", name: "PC9" },
  { description: "PPV - PC/ goal response", name: "PCA" },
  { description: "PPP - PC/ pathway (problem-oriented) add", name: "PCB" },
  { description: "PPP - PC/ pathway (problem-oriented) update", name: "PCC" },
  { description: "PPP - PC/ pathway (problem-oriented) delete", name: "PCD" },
  { description: "QRY - PC/ pathway (problem-oriented) query", name: "PCE" },
  {
    description: "PTR - PC/ pathway (problem-oriented) query response",
    name: "PCF",
  },
  { description: "PPG - PC/ pathway (goal-oriented) add", name: "PCG" },
  { description: "PPG - PC/ pathway (goal-oriented) update", name: "PCH" },
  { description: "PPG - PC/ pathway (goal-oriented) delete", name: "PCJ" },
  { description: "QRY - PC/ pathway (goal-oriented) query", name: "PCK" },
  {
    description: "PPT - PC/ pathway (goal-oriented) query response",
    name: "PCL",
  },
  { description: "QRY/DSR - Query sent for immediate response", name: "Q01" },
  { description: "QRY/QCK - Query sent for deferred response", name: "Q02" },
  { description: "DSR/ACK - Deferred response to a query", name: "Q03" },
  { description: "EQQ - Embedded query language query", name: "Q04" },
  { description: "UDM/ACK - Unsolicited display update message", name: "Q05" },
  { description: "OSQ/OSR - Query for order status", name: "Q06" },
  { description: "VQQ - Virtual table query", name: "Q07" },
  { description: "SPQ - Stored procedure request", name: "Q08" },
  { description: "RQQ - event replay query", name: "Q09" },
  { description: "QSB - Create subscription", name: "Q16" },
  { description: "QVR - Query for previous events", name: "Q17" },
  { description: "QBP - Get person demographics", name: "Q21" },
  { description: "QBP - Find candidates", name: "Q22" },
  { description: "QBP - Get corresponding identifiers", name: "Q23" },
  { description: "QBP - Allocate identifiers", name: "Q24" },
  { description: "QBP - Personnel Information by Segment Query", name: "Q25" },
  {
    description: "ORU/ACK - Unsolicited transmission of an observation message",
    name: "R01",
  },
  { description: "QRY - Query for results of observation", name: "R02" },
  {
    description:
      "QRY/DSR Display-oriented results, query/unsol. update (for backward compatibility only) (Replaced by Q05)",
    name: "R03",
  },
  {
    description:
      "ORF - Response to query; transmission of requested observation",
    name: "R04",
  },
  { description: "QRY/DSR - query for display results (See Q01)", name: "R05" },
  {
    description: "UDM - unsolicited update/display results (See Q05)",
    name: "R06",
  },
  { description: "EDR - enhanced display response", name: "R07" },
  { description: "TBR - tabular data response", name: "R08" },
  { description: "ERP - event replay response", name: "R09" },
  { description: "OUL - Unsolicited laboratory observation", name: "R21" },
  {
    description: "RAR - Pharmacy administration information query response",
    name: "RAR",
  },
  {
    description: "RDR - Pharmacy dispense information query response",
    name: "RDR",
  },
  {
    description: "RER - Pharmacy encoded order information query response",
    name: "RER",
  },
  {
    description: "RGR - Pharmacy dose information query response",
    name: "RGR",
  },
  {
    description: "ROR - Pharmacy prescription order query response",
    name: "ROR",
  },
  { description: "SRM/SRR - Request new appointment booking", name: "S01" },
  { description: "SRM/SRR - Request appointment rescheduling", name: "S02" },
  { description: "SRM/SRR - Request appointment modification", name: "S03" },
  { description: "SRM/SRR - Request appointment cancellation", name: "S04" },
  { description: "SRM/SRR - Request appointment discontinuation", name: "S05" },
  { description: "SRM/SRR - Request appointment deletion", name: "S06" },
  {
    description:
      "SRM/SRR - Request addition of service/resource on appointment",
    name: "S07",
  },
  {
    description:
      "SRM/SRR - Request modification of service/resource on appointment",
    name: "S08",
  },
  {
    description:
      "SRM/SRR - Request cancellation of service/resource on appointment",
    name: "S09",
  },
  {
    description:
      "SRM/SRR - Request discontinuation of service/resource on appointment",
    name: "S10",
  },
  {
    description:
      "SRM/SRR - Request deletion of service/resource on appointment",
    name: "S11",
  },
  {
    description: "SIU/ACK - Notification of new appointment booking",
    name: "S12",
  },
  {
    description: "SIU/ACK - Notification of appointment rescheduling",
    name: "S13",
  },
  {
    description: "SIU/ACK - Notification of appointment modification",
    name: "S14",
  },
  {
    description: "SIU/ACK - Notification of appointment cancellation",
    name: "S15",
  },
  {
    description: "SIU/ACK - Notification of appointment discontinuation",
    name: "S16",
  },
  {
    description: "SIU/ACK - Notification of appointment deletion",
    name: "S17",
  },
  {
    description:
      "SIU/ACK - Notification of addition of service/resource on appointment",
    name: "S18",
  },
  {
    description:
      "SIU/ACK - Notification of modification of service/resource on appointment",
    name: "S19",
  },
  {
    description:
      "SIU/ACK - Notification of cancellation of service/resource on appointment",
    name: "S20",
  },
  {
    description:
      "SIU/ACK - Notification of discontinuation of service/resource on appointment",
    name: "S21",
  },
  {
    description:
      "SIU/ACK - Notification of deletion of service/resource on appointment",
    name: "S22",
  },
  {
    description: "SIU/ACK - Notification of blocked schedule time slot(s)",
    name: "S23",
  },
  {
    description:
      'SIU/ACK - Notification of opened ("unblocked"") schedule time slot(s)"',
    name: "S24",
  },
  { description: "SQM/SQR - Schedule query message and response", name: "S25" },
  {
    description:
      "SIU/ACK Notification that patient did not show up for schedule appointment",
    name: "S26",
  },
  { description: "MDM/ACK - Original document notification", name: "T01" },
  {
    description: "MDM/ACK - Original document notification and content",
    name: "T02",
  },
  { description: "MDM/ACK - Document status change notification", name: "T03" },
  {
    description: "MDM/ACK - Document status change notification and content",
    name: "T04",
  },
  { description: "MDM/ACK - Document addendum notification", name: "T05" },
  {
    description: "MDM/ACK - Document addendum notification and content",
    name: "T06",
  },
  { description: "MDM/ACK - Document edit notification", name: "T07" },
  {
    description: "MDM/ACK - Document edit notification and content",
    name: "T08",
  },
  { description: "MDM/ACK - Document replacement notification", name: "T09" },
  {
    description: "MDM/ACK - Document replacement notification and content",
    name: "T10",
  },
  { description: "MDM/ACK - Document cancel notification", name: "T11" },
  { description: "QRY/DOC - Document query", name: "T12" },
  { description: "ESU/ACK - Automated equipment status update", name: "U01" },
  { description: "ESR/ACK - Automated equipment status request", name: "U02" },
  { description: "SSU/ACK - Specimen status update", name: "U03" },
  { description: "SSR/ACK - specimen status request", name: "U04" },
  {
    description: "INU/ACK  - Automated equipment inventory update",
    name: "U05",
  },
  {
    description: "INR/ACK - Automated equipment inventory request",
    name: "U06",
  },
  { description: "EAC/ACK - Automated equipment command", name: "U07" },
  { description: "EAR/ACK - Automated equipment response", name: "U08" },
  { description: "EAN/ACK - Automated equipment notification", name: "U09" },
  {
    description: "TCU/ACK - Automated equipment test code settings update",
    name: "U10",
  },
  {
    description: "TCR/ACK - Automated equipment test code settings request",
    name: "U11",
  },
  {
    description: "LSU/ACK - Automated equipment log/service update",
    name: "U12",
  },
  {
    description: "LSR/ACK - Automated equipment log/service request",
    name: "U13",
  },
  { description: "VXQ - Query for vaccination record", name: "V01" },
  {
    description:
      "VXX - Response to vaccination query returning multiple PID matches",
    name: "V02",
  },
  { description: "VXR - Vaccination record response", name: "V03" },
  { description: "VXU - Unsolicited vaccination record update", name: "V04" },
  {
    description:
      "MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)",
    name: "Varies",
  },
  {
    description:
      "ORU - Waveform result, unsolicited transmission of requested information",
    name: "W01",
  },
  { description: "QRF - Waveform result, response to query", name: "W02" },
] as const;
