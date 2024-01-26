
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  if (liked) {
    return React.createElement("span", null, "You liked this");
  } else {
    return React.createElement(
      "button",
      {
        onClick: () => setLiked(true),
      },
      "Like"
    );

  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));
