import * as fs from "fs";
import * as readline from "readline-sync";

async function NOTE_SCRIPT() {
  try {
    const answer = readline.keyInYN(
      "Is This Your Final Commit Of The Day? - if (YES) (THEN) script will write a file with progress notes"
    );
    if (answer === true || answer) {
      const path = ".git/COMMIT_EDITMSG";
      const commit_message = await new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      const time_stamp = new Date().toDateString();
      const formatted_note = `> [!IMPORTANT] This Note Gives Details On Where I Left Off\n # ${time_stamp} JL ArgonV3 \n # Description: \n ${commit_message}`;
      const file_name = time_stamp.concat(" JL Argon-V3");
      fs.writeFileSync(`notes/${file_name}`, formatted_note);
    } else {
      console.log("Proceeding with commit.");
    }
  } catch (err) {
    console.error(
      `An Error Running [NOTE SCRIPT] on commit has propagated: \n`
    );
    console.error(err);
    process.exit(0);
  }
}

NOTE_SCRIPT();
