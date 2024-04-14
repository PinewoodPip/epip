<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer></script>
<script type="module" defer>
  import { Octokit } from "https://esm.sh/@octokit/rest";
  const octo = new Octokit();
  console.log(octo);
  const response = await octo.rest.repos.listCommits({
    owner: "PinewoodPip",
    repo: "EpipEncounters",
  });
  console.log(response.data);
  for (let i in response.data) {
    let entry = response.data[i];
    console.log(entry);
    // No idea why #id > tbody lookup fails.
    $("tbody").append(`
      <tr>
        <td>${entry.commit.author.date.replace("T", " ").replace("Z", " ")}</td>
        <td><a href='${entry.html_url}'>${entry.commit.message.replace("\n", "<br>")}</a></td>
      </tr>
    `);
  }
</script>

# Test/Nightly Versions
To facilitate testing changes and new additions ahead of releases, a test version of the mod is periodically uploaded with the latest commits to the [repository](https://github.com/PinewoodPip/EpipEncounters).

[Latest test build download.](https://drive.google.com/drive/folders/18yDypypxUYvmk6eOpYEEEwvMQlfxj96K?usp=drive_link) **Replace your regular Epip pak to install.**

You may consider this the "nightly" build. Switching between the test version and the regular release is generally safe and won't affect your Epip settings and other saved data.

## Latest Commits
The following table lists the latest commits made; the test version is generally updated shortly after any commits relevant to end-users.

<table id="#commitsTable">
  <tr><th>Date</th><th>Commit</th></tr>
</table>