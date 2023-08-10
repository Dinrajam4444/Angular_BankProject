import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(transactionArray: any[], searchTerm: string, searchType: string): any[] {
    // empty array to store the output

    const result: any = []

    // pipe logic

    if (!transactionArray || !searchTerm || !searchType) {      // For all transactions
      return transactionArray
    }
    else {

      transactionArray.forEach(item => {
        if (item[searchType].includes(searchTerm)) {
          result.push(item)
        }
      })

      // retturn output array

      return result
    }


  }

}
