const Comment = ({ data }) => {
    const {name, text} = data;
    return <div className="flex">
      <div>
        <img className="h-12 w-12" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajVijyoJgMl3Gpyve3xw1osi4bljAFkRVaQ&s" />
      </div>
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
}

export default Comment;
