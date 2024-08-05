const GOOGLE_API_KEY = "XXXX"; // Please add your Google API Key

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_LIST = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyB00WG-M8vUpCqY4exkwi2pdVHvdrxObVo

const CORS_PROXY = "https://corsproxy.io?";
export const YOUTUBE_SEARCH_SUGGESTION_API = CORS_PROXY + "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// https://corsproxy.io/?https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=iphone

export const COMMENTS_MOCK_DATA =[
    {
      name: "Pavan Kumar",
      text: "Looks good to me!",
      replies: [
  
      ]
    },
    {
      name: "Deepika",
      text: "Awesome!!!",
      replies: [
        {
          name: "Pavan Kumar",
          text: "Looks good to me!",
          replies: [
            {
              name: "Deepav",
              text: "Superbbbb!!!",
              replies: [
                {
                  name: "Deepika",
                  text: "Excellent",
                  replies: [
                    
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      name: "Deepav",
      text: "Superbbbb!!!",
      replies: [
        {
          name: "Pavan Kumar",
          text: "Nice",
          replies: [
      
          ]
        },
        {
          name: "Deepika",
          text: "Yes, It is.",
          replies: [
      
          ]
        },
      ]
    },
    {
        name: "Pavan Kumar",
        text: "Looks good to me!",
        replies: [
    
        ]
      },
      {
        name: "Deepika",
        text: "Awesome!!!",
        replies: [
          {
            name: "Pavan Kumar",
            text: "Looks good to me!",
            replies: [
              {
                name: "Deepav",
                text: "Superbbbb!!!",
                replies: [
                  {
                    name: "Deepika",
                    text: "Excellent",
                    replies: [
                      
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        name: "Deepav",
        text: "Superbbbb!!!",
        replies: [
          {
            name: "Pavan Kumar",
            text: "Nice",
            replies: [
        
            ]
          },
          {
            name: "Deepika",
            text: "Yes, It is.",
            replies: [
        
            ]
          },
        ]
      },
      {
        name: "Pavan Kumar",
        text: "Looks good to me!",
        replies: [
    
        ]
      },
      {
        name: "Deepika",
        text: "Awesome!!!",
        replies: [
          {
            name: "Pavan Kumar",
            text: "Looks good to me!",
            replies: [
              {
                name: "Deepav",
                text: "Superbbbb!!!",
                replies: [
                  {
                    name: "Deepika",
                    text: "Excellent",
                    replies: [
                      
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        name: "Deepav",
        text: "Superbbbb!!!",
        replies: [
          {
            name: "Pavan Kumar",
            text: "Nice",
            replies: [
        
            ]
          },
          {
            name: "Deepika",
            text: "Yes, It is.",
            replies: [
        
            ]
          },
        ]
      }
]
