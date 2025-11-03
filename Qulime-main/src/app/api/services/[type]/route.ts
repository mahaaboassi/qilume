import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import csvParser from "csv-parser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: Request, { params }: { params: Promise<{ type: string }> }): Promise<any> {
  const { type } = await params;
  let filePath = "";

  if (type === "wellness") {
    filePath = path.join(process.cwd(), "src/assets/data/wellness_services.csv");
  } else if (type === "anti-aging") {
    filePath = path.join(process.cwd(), "src/assets/data/anti_aging.csv");
  }  else if (type === "laser") {
    filePath = path.join(process.cwd(), "src/assets/data/laser_services.csv");
  } else {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const services: { title: string; description: string }[] = [];

  return new Promise((resolve) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (data) => services.push(data))
      .on("end", () => {
        resolve(NextResponse.json(services));
      });
  });
}
