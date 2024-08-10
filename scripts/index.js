import * as fs from "fs";
import * as readline from "readline-sync";
import { exec } from "child_process";

async function NOTE_SCRIPT() {
  try {
    const path = ".git/COMMIT_EDITMSG";
    //handles y or n bool || string cases
    const commit_message = await new Promise((resolve, reject) => {
      fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
        if (error) {
          reject("Read Commit Message Error no1: \n" + error);
        } else {
          resolve(data);
        }
      });
    });
    const last_four_chars = commit_message.split(" ").at(-1) === "---f";
    if (last_four_chars === true) {
      console.log("Proceeding automated commit ammendment.");
    } else {
      const time_stamp = new Date().toDateString();
      const formatted_note = `> [!IMPORTANT] Notes For ${time_stamp} JL ArgonV3 \n\n # Description: \n\n ${commit_message}`;
      const file_name = time_stamp.concat(" JL Argon-V3.md");

      fs.writeFile(`notes/${file_name}`, formatted_note, "utf-8", (error) => {
        throw new Error("Write File Error: " + error);
      });

      const command_one_stdout = await new Promise((resolve, reject) => {
        exec("git add .", (error, stdout) => {
          if (error) {
            reject("Git Add Error: \n" + error);
          } else {
            resolve(stdout);
          }
        });
      });
      console.log(
        `COMMAND ONE STDOUT [git add . command result]: ${command_one_stdout}`
      );

      const recent_msg = await new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
          if (error) {
            reject("Read Commit Message Error no2: \n" + error);
          } else {
            resolve(data);
          }
        });
      });
      const command_two_stdout = await new Promise((resolve, reject) => {
        exec(`git commit -m ${recent_msg} ---f`, (error, stdout) => {
          if (error) {
            throw new Error("Git Commit -m Error [custom flag]: \n" + error);
          } else {
            console.log(`COMMAND TWO STDOUT: ${stdout}`);
          }
        });
      });
      console.log(
        `COMMAND TWO STDOUT [git commit -m ---f command result]: ${command_two_stdout}`
      );
    }
  } catch (err) {
    console.error(
      `\nAn Error Running [NOTE SCRIPT] on commit has propagated: \n`
    );
    console.error(err);
    process.exit(0);
  }
}

NOTE_SCRIPT();
