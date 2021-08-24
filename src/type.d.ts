interface Post {
    id: number,
    title: string,
    contents: Array,
    createdDate: Date,
    author: string,
}

type PostState = {
    posts: Post[]
}

type PostAction = {
    type: string,
    post: Post
}

type DispatchType = (args: PostAction) => PostAction