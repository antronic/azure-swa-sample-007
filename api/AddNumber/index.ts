import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { TableClient, odata } from '@azure/data-tables'
import dayjs from 'dayjs'

const tabelService = TableClient.fromConnectionString(process.env.demothprogassoc_STORAGE, process.env.demothprogassoc_TABLE)

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const rowKey = dayjs().format('HHmmss')

    const number = req.body && req.body.number

    console.log('rowKey // ', rowKey, '/', number)

    const entity = {
        partitionKey: "demoDay",
        rowKey: rowKey.toString(),
        MyNumber: number.toString(),
        Name: "Anonymous"
    }

    await tabelService.createEntity(entity)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: 'Success Satu!',
    }

}

export default httpTrigger