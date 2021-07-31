import { assign } from '@ctx-core/object'
import { parent_item_1 } from '@WEB-51878-test/parent'
import * as import_meta_resolve from 'import-meta-resolve'
const { resolve } = import_meta_resolve
console.debug(await resolve('../package.json', import.meta.url))
export function src_item_1() {
	assign({}, { foo: 'bar' })
	parent_item_1()
}
