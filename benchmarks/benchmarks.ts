import { Suite, Event } from "benchmark";

import { Message } from "../src";

const message = `MSH|^~\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE
SCH|1209|13030|||1209|OV15^OFFICE VISIT-15^CSI^N|OFFICE VISIT-15^OFFICE VISIT-15 -|OV15|15|m|^^15^20190423140000^20190423141500|||||mdrxmbyr^Byrne^Misty||||mdrxmbyr^Byrne^Misty|||||Scheduled^^CSI
PID|1||150||Bond^James^^007||19770920|M|||007 Soho Lane^^Cary^NC^27511||(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com|(919)851-6177 X007^^^^^919^8516177^007||M||150|007-00-0007|||||||||||N
PV1|1|R|||||MRYAN^Ryan^Mark^S^phd^^^^&MR1127&UPIN||WEEDER^Weeder, M.D.^Dana^N^^^^^&W22630&UPIN|||||||N||||M
RGS|1|A
AIG|1||PULLEN^Pullen, Jeri|P^^CSI
AIL|1||MainOffi^^^MainOffi^^^^^Healthmatics Clinic|^Healthmatics Clinic^CSI
AIP|1||JPULLEN1^Pullen^Jeri^^^^^^&F12456&UPIN|D^Pullen, Jeri||20190423140000|||15|m^Minutes
`;

const suite = new Suite();

suite
  .add("HL7v2 message parsing", () => {
    new Message(message);
  })
  .add("HL7v2 message parsing with JSONata", () => {
    new Message(message).transform("PID.`6`.`2` &  ' ' & PID.`6`.`1`");
  })
  .on("cycle", (event: Event) => {
    console.log(String(event.target));
  })
  .run();
