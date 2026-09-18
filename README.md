                    BROWSER
                       |
                       |
              fetch("/stats")
                       |
                       ↓
              ┌─────────────────┐
              │   index.js      │
              │ Node + Express  │
              └─────────────────┘
                       |
                       |
              GET /stats arrives
                       |
                       ↓
             app.get("/stats")
                       |
                       ↓
              Create GraphQL query
                       |
                       ↓
          fetch("leetcode.com/graphql")
                       |
                       ↓
              ┌─────────────────┐
              │    LeetCode     │
              │     Server      │
              └─────────────────┘
                       |
                       ↓
               GraphQL response
                       |
                       ↓
              response.json()
                       |
                       ↓
             Extract statistics
                       |
                       ↓
              res.json({...})
                       |
                       ↓
                  Browser
                       |
                       ↓
                  script.js
                       |
                       ↓
                Update HTML
                       |
                       ↓
             ┌─────────────────┐
             │ Total   1568    │
             │ Easy     486    │
             │ Medium   908    │
             │ Hard     174    │
             └─────────────────┘
