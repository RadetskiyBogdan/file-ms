import { Injectable } from '@nestjs/common';
import xlstojson from 'xls-to-json-lc';
import xlsxtojson from 'xlsx-to-json-lc';

@Injectable()
export class FilesService {
    fileParser(file: Express.Multer.File) {
        let exceltojson;

        if (file.originalname.split('.')[file.originalname.split('.').length - 1] === 'xlsx') {
            exceltojson = xlsxtojson;
        } else {
            exceltojson = xlstojson;
        }
        console.log(file.path);
        try {
            exceltojson(
                {
                    input: file.path,
                    output: null,
                    lowerCaseHeaders: true
                },
                function (err, result) {
                    if (err) {
                        return err;
                    }
                    return result;
                }
            );
        } catch (e) {
            return 'Corupted excel file';
        }
    }
}
