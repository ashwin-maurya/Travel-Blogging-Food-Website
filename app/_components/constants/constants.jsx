function Head(props) {
  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: "150px",
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: "14px",
          marginLeft: "5px",
        }}
      >
        <p
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "20px",
            fontFamily: "sans",
            margin: 0,
            marginLeft: "5px",
          }}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}
export const storyContentGroup = [
  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1573525526563-5f8a2375f2b7?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDklM0ExNnxlbnwwfHwwfHx8MA%3D%3D",
      duration: 2000,
      header: <Head name="Kolkata" time="5" />,
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1566895291281-ea63efd4bdbc?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDklM0ExNnxlbnwwfHwwfHx8MA%3D%3D",
      duration: 2000,
      header: <Head name="Kolkata" time="5" />,
    },
  ],

  [
    {
      type: "image",
      url: "https://wallpapercave.com/wp/wp5129072.jpg",
      duration: 2000,
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww",
      duration: 2000,
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=564&q=80",
      duration: 2000,
    },
  ],

  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1590099914662-a76f2f83b802?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8OSUzQTE2fGVufDB8fDB8fHww",
      duration: 2000,
    },
    {
      type: "image",
      url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
      duration: 2000,
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1616578492900-ea5a8fc6c341?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8OSUzQTE2fGVufDB8fDB8fHww",
      duration: 2000,
    },
  ],
  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1590099914662-a76f2f83b802?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8OSUzQTE2fGVufDB8fDB8fHww",
      duration: 2000,
      header: <Head name="Last story" time="5" />,
    },
  ],
];

export const stories = [
  {
    category: "Politics",
    imageUrl: "https://source.unsplash.com/random/240x320",
    title: "Autem sunt tempora mollitia magnam non voluptates",
    storycontent: storyContentGroup[0],
  },
  {
    category: "Health",
    imageUrl: "https://source.unsplash.com/random/241x320",
    title: "Inventore reiciendis aliquam excepturi",
    storycontent: storyContentGroup[1],
  },
  {
    category: "Science",
    imageUrl: "https://source.unsplash.com/random/242x320",
    title: "Officiis mollitia dignissimos commodi optio vero animi",
    storycontent: storyContentGroup[2],
  },
  {
    category: "Sports",
    imageUrl: "https://source.unsplash.com/random/243x320",
    title: "Doloribus sit illo necessitatibus architecto exercitationem enim",
    storycontent: storyContentGroup[3],
  },
];

console.log(stories);
