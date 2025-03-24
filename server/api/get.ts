import { desserts } from '~/lib/tableData';


export default defineEventHandler(async (event) => { 
	return { items: desserts, total: desserts.length} ;
});
