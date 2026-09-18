const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("DSA Tracker Backend is running!");
});

app.get("/problems", (req, res) => {
  res.json([
    {
      title: "Two Sum",
      difficulty: "Easy",
    },
    {
      title: "Longest Common Subsequence",
      difficulty: "Medium",
    },
    {
      title: "Word Ladder",
      difficulty: "Hard",
    },
  ]);
});

app.get("/stats", async (req, res) => {
  const query = `
        query getUserStats($username: String!) {
            matchedUser(username: $username) {
                username
                submitStats: submitStatsGlobal {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }
    `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: {
        username: "asmita3183",
      },
    }),
  });

  const data = await response.json();

  const stats = data.data.matchedUser.submitStats.acSubmissionNum;

  res.json({
    username: "asmita3183",
    total: stats.find((item) => item.difficulty === "All").count,
    easy: stats.find((item) => item.difficulty === "Easy").count,
    medium: stats.find((item) => item.difficulty === "Medium").count,
    hard: stats.find((item) => item.difficulty === "Hard").count,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
