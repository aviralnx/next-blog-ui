import PostPreview from '../../components/post-preview'

const BlogList = () => {
  const posts = [{title: 'title 1', id: 'y297hgfecd', excerpt: "Quis aliquip ullamco nisi sit. Pariatur ut culpa minim veniam est elit minim eiusmod duis anim tempor magna. Veniam sint nulla Lorem officia non nulla. Cillum eiusmod voluptate esse officia tempor incididunt dolore veniam do sint. Anim quis commodo qui consequat qui ullamco aliquip consectetur dolore. Nisi officia id sint ea sit ut enim amet mollit est amet est dolore. Cupidatat nisi est nostrud in voluptate et sit sint fugiat excepteur minim ex mollit proident."},
  {title: 'title 2', id: 'y297hgfecd88', excerpt: "Quis aliquip ullamco nisi sit. Pariatur ut culpa minim veniam est elit minim eiusmod duis anim tempor magna. Veniam sint nulla Lorem officia non nulla. Cillum eiusmod voluptate esse officia tempor incididunt dolore veniam do sint. Anim quis commodo qui consequat qui ullamco aliquip consectetur dolore. Nisi officia id sint ea sit ut enim amet mollit est amet est dolore. Cupidatat nisi est nostrud in voluptate et sit sint fugiat excepteur minim ex mollit proident."}
]
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            id={post.id}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogList
