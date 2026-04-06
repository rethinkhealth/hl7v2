import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";

export default new Mllp().parser(parseHL7v2);
