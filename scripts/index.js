import * as fs from "fs";
import * as readline from "readline-sync";
import { exec } from "child_process";

async function NOTE_SCRIPT() {
  //want to alter commit message
  try {
    //grab path
    const path = ".git/COMMIT_EDITMSG";
    //read commit message
    const commit_message = await new Promise((resolve, reject) => {
      fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
        if (error) {
          reject("Read Commit Message Error no1: \n" + error);
        } else {
          resolve(data);
        }
      });
    });
    const last_three_chars = commit_message.split(" ").at(-1).trim();
    if (last_three_chars.trim() === "---f") {
      console.log("Proceeding automated commit ammendment.");
    } else {
      const answer = readline.keyInYN("Write this commit msg to file?");
      if (answer) {
        const time_stamp = new Date().toDateString();
        const formatted_note = `> [!IMPORTANT] \n > These Notes Are For User JL \n\n # Description: \n\n ${commit_message}`;
        const file_name = time_stamp.concat(" JL Argon-V3.md");

        await new Promise((resolve, reject) => {
          fs.writeFile(`notes/${file_name}`, formatted_note, (error) => {
            if (error) reject("Write File Error: " + error);
            else resolve();
          });
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
          `COMMAND ONE STDOUT [git add . command result]: ${command_one_stdout} EOF`
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
          exec(`git commit -m "${recent_msg} ---f"`, (error, stdout) => {
            if (error) {
              reject("Git Commit -m Error [custom flag]: \n" + error);
            } else {
              resolve(stdout);
            }
          });
        });
      } else {
        console.log("Proceeding with commit (regular)");
      }
    }
  } catch (err) {
    console.trace();
    console.timeStamp();
    console.error(
      `\nAn Error Running [NOTE SCRIPT] on commit has propagated: \n`
    );
    console.error(err);
    process.exit(0);
  }
}

NOTE_SCRIPT();
