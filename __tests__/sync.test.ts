import { complianceTestsSync } from "@keeveestore/test-suite";
import { tmpdir } from "os";
import { StoreSync } from "../src";

complianceTestsSync(() => StoreSync.new<string, string>(`${tmpdir()}/keeveestore.toml`), {
	key1: "value1",
	key2: "value2",
	key3: "value3",
	key4: "value4",
	key5: "value5",
});
