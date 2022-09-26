import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import dayjs from 'dayjs'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const rowKey = dayjs().format('HHmmss')

    const number = req.body && req.body.number

    console.log('rowKey // ', rowKey, '/', number)

    context.bindings.outputTable = []
    context.bindings.outputTable.push({
        PartitionKey: "demoDay1",
        RowKey: 'x1234',
        MyNumber: number.toString(),
    })

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: 'Success Satu!',
    }

}

export default httpTrigger