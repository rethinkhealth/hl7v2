// Generated table profile for 0003 (v2.3)

export const id = "0003";
export const description = "Event Type";
export const type = "hl7";
export const codes = [
  { description: "ADT/ACK - Admit a patient", name: "A01" },
  { description: "ADT/ACK -  Transfer a patient", name: "A02" },
  { description: "ADT/ACK -  Discharge a patient", name: "A03" },
  { description: "ADT/ACK -  Register a patient", name: "A04" },
  { description: "ADT/ACK -  Preadmit a patient", name: "A05" },
  {
    description: "ADT/ACK -  Transfer an outpatient to inpatient",
    name: "A06",
  },
  {
    description: "ADT/ACK -  Transfer an inpatient to outpatient",
    name: "A07",
  },
  { description: "ADT/ACK -  Update patient information", name: "A08" },
  { description: "ADT/ACK -  Patient departing", name: "A09" },
  { description: "ADT/ACK -  Patient arriving", name: "A10" },
  { description: "ADT/ACK -  Cancel admit", name: "A11" },
  { description: "ADT/ACK -  Cancel transfer", name: "A12" },
  { description: "ADT/ACK -  Cancel discharge", name: "A13" },
  { description: "ADT/ACK -  Pending admit", name: "A14" },
  { description: "ADT/ACK -  Pending transfer", name: "A15" },
  { description: "ADT/ACK -  Pending discharge", name: "A16" },
  { description: "ADT/ACK -  Swap patients", name: "A17" },
  { description: "ADT/ACK -  Merge patient information", name: "A18" },
  { description: "QRY/ACK -  Patient query", name: "A19" },
  { description: "ADT/ACK -  Bed status update", name: "A20" },
  { description: "ADT/ACK -  Leave of absence - out (leaving)", name: "A21" },
  { description: "ADT/ACK -  Leave of absence - in (returning)", name: "A22" },
  { description: "ADT/ACK -  Delete a patient record", name: "A23" },
  { description: "ADT/ACK -  Link patient information", name: "A24" },
  { description: "ADT/ACK -  Cancel pending discharge", name: "A25" },
  { description: "ADT/ACK -  Cancel pending transfer", name: "A26" },
  { description: "ADT/ACK -  Cancel pending admit", name: "A27" },
  { description: "ADT/ACK -  Add person information", name: "A28" },
  { description: "ADT/ACK -  Delete person information", name: "A29" },
  { description: "ADT/ACK -  Merge person information", name: "A30" },
  { description: "ADT/ACK -  Update person information", name: "A31" },
  { description: "ADT/ACK -  Cancel patient arriving", name: "A32" },
  { description: "ADT/ACK -  Cancel patient departing", name: "A33" },
  {
    description: "ADT/ACK -  Merge patient information - patient ID only",
    name: "A34",
  },
  {
    description: "ADT/ACK -  Merge patient information - account number only",
    name: "A35",
  },
  {
    description:
      "ADT/ACK -  Merge patient information - patient ID and account number",
    name: "A36",
  },
  { description: "ADT/ACK -  Unlink patient information", name: "A37" },
  { description: "ADT/ACK - Cancel pre-admit", name: "A38" },
  { description: "ADT/ACK - Merge person - external ID", name: "A39" },
  { description: "ADT/ACK - Merge patient - internal ID", name: "A40" },
  {
    description: "ADT/ACK - Merge account - patient account number",
    name: "A41",
  },
  { description: "ADT/ACK - Merge visit - visit number", name: "A42" },
  {
    description: "ADT/ACK - Move patient information - internal ID",
    name: "A43",
  },
  {
    description: "ADT/ACK - Move account information - internal ID",
    name: "A44",
  },
  {
    description: "ADT/ACK - Move visit information - visit number",
    name: "A45",
  },
  { description: "ADT/ACK - Change external ID", name: "A46" },
  { description: "ADT/ACK - Change internal ID", name: "A47" },
  { description: "ADT/ACK - Change alternate patient ID", name: "A48" },
  { description: "ADT/ACK - Change patient account number", name: "A49" },
  { description: "ADT/ACK - Change visit number", name: "A50" },
  { description: "ADT/ACK - Change alternate visit ID", name: "A51" },
  { description: "SRM - Register a patient on a clinical trial", name: "C01" },
  {
    description:
      "SRM - Cancel a patient registration on clinical trial (for clerical mistakes only)",
    name: "C02",
  },
  { description: "SRM - Correct/update registration information", name: "C03" },
  { description: "SRM - Patient has gone off a clinical trial", name: "C04" },
  { description: "SRM - Patient enters phase of clinical trial", name: "C05" },
  {
    description: "SRM - Cancel patient entering a phase (clerical mistake)",
    name: "C06",
  },
  { description: "SRM - Correct/update phase information", name: "C07" },
  {
    description: "SRM - Patient has gone off phase of clinical trial",
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
  { description: "QRY/EQQ/SPQ/VQQ/RQQ - Cancel query", name: "CNQ" },
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
  {
    description:
      "MFN/MFK - Master file not otherwise specified (for backward compatibility only)",
    name: "M01",
  },
  { description: "MFN/MFK - Master file - Staff Practioner", name: "M02" },
  { description: "MFN/MFK - Master file - Test/Observation", name: "M03" },
  {
    description: "MFD/ACK - Master files delayed application acknowledgement",
    name: "M04",
  },
  { description: "MFN/MFK - Patient location master file", name: "M05" },
  { description: "MFN/MFK - Charge description master file", name: "M06" },
  {
    description:
      "MFN/MFK - Clinical study without phases but with schedules master file",
    name: "M07",
  },
  {
    description: "MFN/MFK - Test/Observation (Nurmeric) master file",
    name: "M08",
  },
  {
    description: "MFN/MFK - Test/Observation (Categorical) master file",
    name: "M09",
  },
  {
    description: "MFN/MFK - Test/Observation batteries master file",
    name: "M10",
  },
  {
    description: "MFN/MFK - Test/calculated observation master file",
    name: "M11",
  },
  { description: "ORM - Order message (also RDE, RDS, RGV, RAS,", name: "O01" },
  {
    description: "ORR - Order response (also RRE, RRD, RRG, RRA,",
    name: "O02",
  },
  { description: "BAR/ACK - Add and update patient account", name: "P01" },
  { description: "BAR/ACK - Purge patient account", name: "P02" },
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
  { description: "PPR - PC/Problem Add", name: "PC1" },
  { description: "PPR - PC/Problem Update", name: "PC2" },
  { description: "PPR - PC/Problem Delete", name: "PC3" },
  { description: "PPR - PC/Problem Query", name: "PC4" },
  { description: "PPR - PC/Problem Reponse", name: "PC5" },
  { description: "PGL - PC/Goal Add", name: "PC6" },
  { description: "PGL - PC/Goal Update", name: "PC7" },
  { description: "PGL - PC/Goal Delete", name: "PC8" },
  { description: "PGL - PC/Goal Query", name: "PC9" },
  { description: "PGL - PC/Goal Response", name: "PCA" },
  { description: "PPP - PC/Pathway (Problem Oriented) Add", name: "PCB" },
  { description: "PPP - PC/Pathway (Problem Oriented) Update", name: "PCC" },
  { description: "PPP - PC/Pathway (Problem Oriented) Delete", name: "PCD" },
  { description: "PPP - PC/Pathway (Problem Oriented) Query", name: "PCE" },
  {
    description: "PPP - PC/Pathway (Problem Oriented) Query Response",
    name: "PCF",
  },
  { description: "PPP - PC/Pathway (Goal Oriented) Add", name: "PCG" },
  { description: "PPP - PC/Pathway (Goal Oriented) Update", name: "PCH" },
  { description: "PPP - PC/Pathway (Goal Oriented) Delete", name: "PCJ" },
  { description: "PPP - PC/Pathway (Goal Oriented) Query", name: "PCK" },
  {
    description: "PPP - PC/Pathway (Goal Oriented) Query Response",
    name: "PCL",
  },
  { description: "QRY/DSR - Query sent for immediate response", name: "Q01" },
  { description: "QRY/ACK - Query sent for deferred response", name: "Q02" },
  { description: "DSR/ACK - Deferred response to a query", name: "Q03" },
  { description: "UDM/ACK - Unsolicited display update", name: "Q05" },
  { description: "OSQ/OSR - Query for order status", name: "Q06" },
  {
    description: "ORU/ACK - Unsolicited transmission of an observation",
    name: "R01",
  },
  { description: "QRY - Query for results of observation", name: "R02" },
  {
    description:
      "Display-oriented results, query/unsol. update (for backward compatibility only)",
    name: "R03",
  },
  {
    description:
      "ORF - Response to query; transmission of requested observation",
    name: "R04",
  },
  { description: "QRY/DSR- query für display results", name: "R05" },
  { description: "UDM-unsolicited update/display results", name: "R06" },
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
      "SRM/SRR - Request cancellation of servic/resource on appointment",
    name: "S09",
  },
  {
    description:
      "SRM/SRR - Request discontinuation of servic/resource on appointment",
    name: "S10",
  },
  {
    description: "SRM/SRR - Request deletion of servic/resource on appointment",
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
  { description: "SIU/ACK - Notification of appointmentdeletion", name: "S17" },
  {
    description:
      "SIU/ACK - Notification of addition of service/resource on appointment",
    name: "S18",
  },
  {
    description:
      "SIU/ACK - Notification ofmodification of service/resource on appointment",
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
      "SIU/ACK - Notification of open (“unblocked”) schedule time slot(s)",
    name: "S24",
  },
  { description: "SQM/SQR - Query schedule information", name: "S25" },
  {
    description:
      "notification that patient did not show up for schedule appointment",
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
  { description: "MDM/ACK - Document replace notification", name: "T07" },
  {
    description: "MDM/ACK - Document replace notification and content",
    name: "T08",
  },
  { description: "MDM/ACK - Document cancel notification", name: "T09" },
  {
    description: "MDM/ACK - Document replacement notification and content",
    name: "T10",
  },
  { description: "MDM/ACK - Document cancel notification", name: "T11" },
  { description: "QRY/DOC - Document query", name: "T12" },
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
    name: "varies",
  },
  {
    description:
      "ORU - Waveform result, unsolicited transmission of requested information",
    name: "W01",
  },
  { description: "QRF - Waveform result, response to query", name: "W02" },
  { description: "PEX - Product experience", name: "X01" },
] as const;
