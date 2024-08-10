import * as fs from "fs";
import * as readline from "readline-sync";
import { exec } from "child_process";

async function NOTE_SCRIPT() {
  try {
    const path = ".git/COMMIT_EDITMSG";
    const cmsg = await new Promise((resolve, reject) => {
      fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
        if (error) {
          reject("Read Commit Message Error no1: \n" + error);
        } else {
          resolve(data);
        }
      });
    });
    console.log(cmsg.split(""));
    if (cmsg.split("").at(-1) !== "$") {
      const answer = readline.keyInYN(
        "Is This Your Final Commit Of The Day? - if (YES) (THEN) script will write a file with progress notes"
      );
      if (answer === true || answer) {
        //handles y or n bool || string cases
        const commit_message = await new Promise((resolve, reject) => {
          fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
            if (error) {
              reject("Read Commit Message Error no2: \n" + error);
            } else {
              resolve(data);
            }
          });
        });
        const time_stamp = new Date().toDateString();
        const formatted_note = `> [!IMPORTANT] This Note Gives Details On Where I Left Off\n\n # ${time_stamp} JL ArgonV3 \n\n # Description: \n\n ${commit_message}`;
        const file_name = time_stamp.concat(" JL Argon-V3.md");
        fs.writeFileSync(`notes/${file_name}`, formatted_note);

        const command_one_stdout = await new Promise((resolve, reject) => {
          exec("git add .", (error, stdout) => {
            if (error) {
              reject("Git Add Error: \n" + error);
            } else {
              resolve(stdout);
            }
          });
        });
        console.log(`COMMAND ONE STDOUT: ${command_one_stdout}`);
        const command_two_stdout = await new Promise((resolve, reject) => {
          exec(`git commit -a`, (error, stdout) => {
            if (error) {
              reject("Git Commit -a Error: \n" + error);
            } else {
              resolve(stdout);
            }
          });
        });
        console.log(`COMMAND TWO STDOUT: ${command_two_stdout}`);
      } else {
        console.log("Proceeding with commit (a).");
      }
    } else {
      console.log("Proceeding with commit (b).");
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
