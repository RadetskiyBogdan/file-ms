import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';

@Injectable()
export class FilesService {
    fileParser(file: Express.Multer.File) {
        const workbook = xlsx.read(file.buffer['data'], { type: 'buffer' });
        const sheetNameList = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[1]]);

        return data;
    }
}
