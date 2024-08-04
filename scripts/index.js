import { exec } from "child_process";
import * as fs from "fs";

async function PRE_COMMIT_HOOK() {
  try {
    const file_path = ".git/COMMIT_EDITMSG";
    const commit_message = await new Promise((resolve, reject) => {
      fs.readFile(file_path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    const new_commit_message = `JL ArgonV3 ${new Date().toISOString()} \n [ ${commit_message} ]`;
    fs.writeFile(file_path, new_commit_message, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
    console.log("Status Code 0");
  } catch (err) {
    console.error(`Error Staging File For Commit: ${err.message || err}`);
    console.timeStamp();
    console.trace();
    process.exit(1);
  }
}

PRE_COMMIT_HOOK();
