/*
 * Copyright 2022, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CanonicalisationFactory } from "../index.js";
import { assert, assertEquals, DOMParser, XMLSerializer } from "./test_deps.ts";

Deno.test("x14n", () => {
	const xmlData = `
<doc>Hello, world!<!-- Comment 1 --></doc>


<!-- Comment 2 -->

<!-- Comment 3 -->
	`;
	const document = new DOMParser().parseFromString(xmlData, "text/xml");

	const c14n = new CanonicalisationFactory();
	const canonicaliser = c14n.createCanonicaliser("http://www.w3.org/2001/10/xml-exc-c14n#WithComments");

	const can = canonicaliser.canonicalise(document.documentElement);
	assertEquals("<doc>Hello, world!<!-- Comment 1 --></doc>", can);
});
