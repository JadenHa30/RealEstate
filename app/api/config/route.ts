import { promises as fs } from "fs";
import forIn from 'lodash/forIn';
import { type NextRequest, NextResponse} from 'next/server';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'app/api/config/local-config.json');

export async function GET(req: NextRequest) {
  try {
    const jsonData = await fs.readFile(dataFilePath, "utf-8");
    
    return NextResponse.json({ status: 200, data: JSON.parse(jsonData.toString())});
  } catch (error) {
    return NextResponse.json({status: 500, message: "Error in get appConfig", error });
  }
}
export async function POST(req: NextRequest) {
  try {
    const jsonData = await fs.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData.toString());
      const data: any  = await req.json();
      if (Object.keys(data).length > 1) {
        forIn(data, (value, key) => {
          objectData[key] = value;
        });
      } else {
        objectData[Object.keys(data)[0]] = Object.values(data)[0];
      }
      const updatedData = JSON.stringify(objectData);
      await fs.writeFile(dataFilePath, updatedData);

      return NextResponse.json({ status: 200, data: objectData});
  } catch (error) {
    return NextResponse.json({status: 500, message: "Error in update appConfig", error });
  }
}
  