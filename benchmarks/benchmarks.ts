import { type Event, Suite } from "benchmark";

import { Message, Validator } from "../src";

const message = `MSH|^~\\&||APPT_NEW|||20210917093833|78797|SIU^S12|82636|T|2.5.1|||||||||||
SCH||120152985||||Sch|5072^ONLINE SCHEDULED WALK-IN||40|MIN|^^40^20210917094500^20210917102500|78797^DEXCARE^BKGUSER||||78797^DEXCARE^BKGUSER||||78797^DEXCARE^BKGUSER|||||Sch||
NTE|1||-- Self-pay patient PT Phone: 5155555552 PT Email: mczernek8@gmail.com|SCHNote||
PID|1||E2180692^^^EPI^EPI~80034002^^^^FH~8130726^^^^CM~4880723^^^^FMCCP~381080700^^^^4||Somai^Melek||19970401|M|||1001 rue de la paix^^Bizerte^BZ^60610^^P||(515)555-5552^P^7^^^515^5555552~^NET^Internet^mczernek8@gmail.com||||||000-00-0000|||||||||||N||
PV1|||FCMEIJERSUS^^^FMCCP^^^^^Froedtert and Medical College of Wisconsin FastCare Clinic, Sussex Me*^^||||||||||||||||120152985|||||||||||||||||||||||||20210917||||||
RGS|1||860031001^SUSSEX FASTCARE MEIJER^^262-532-8691^SUSSEX FASTCARE MEIJER
AIS|1||5072^ONLINE SCHEDULED WALK-IN|||||||Sch||
AIG|1||102204^FASTCARE, MEIJER SUSSEX^EPC|2^RESOURCE||||20210917094500|0|MIN|40|MIN
`;

const validator = new Validator(new Message(message).schema?.schema || {});

const suite = new Suite();

suite
  .add("HL7v2 message parsing", () => {
    new Message(message);
  })
  .add("HL7v2 message parsing with validation", () => {
    const parsedMessage = new Message(message);
    validator.validate(parsedMessage);
  })
  .on("cycle", (event: Event) => {
    console.log(String(event.target));
  })
  .run();
