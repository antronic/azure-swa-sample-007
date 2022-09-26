import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TableClient, odata } from '@azure/data-tables'

const tabelService = TableClient.fromConnectionString(process.env.demothprogassoc_STORAGE, process.env.demothprogassoc_TABLE)

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // const wishes = context.bindings.inputTable

    const pKey = 'demoDay'
    const filter = odata`PartitionKey eq ${pKey}`
    const numberList = tabelService.listEntities({ queryOptions: { filter } })

    const lists = []

    for await (const number of numberList) {
        lists.push(number)
    }


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            success: true,
            lists,
        },
    }

}

export default httpTrigger;