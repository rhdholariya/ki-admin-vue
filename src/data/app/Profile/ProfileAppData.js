
export const timelineData = [
    {
        icon: "W", // will render inside a span, not as <component>
        iconBg: "text-light-primary",
        name: "Wilson",
        description: "added reaction in",
        tag: { text: "product website", color: "primary" },
        suffix: "post",
        time: "09.00AM",
    },
    {
        icon: "AD",
        iconBg: "text-light-info",
        description: "2 image files and 2 videos uploaded",
        images: [
            "/images/draggable/02.jpg",
            "/images/draggable/04.jpg",
            "/images/draggable/01.jpg",
        ],
        time: "Updated at 12:45 PM",
    },
    {
        icon: "D",
        iconBg: "text-light-success",
        name: "Dane Wiza",
        description: "added reaction in",
        tag: { text: "#product website", color: "success" },
        suffix: "post",
        // convert object -> html string
        content: `
      <h6 class="mb-1">Need a feature</h6>
      <p class="mb-2">
        Hello everyone, question on email marketing. What are some tips/ tricks
        to avoid going to promotion spam/junk for automated marketing emails?
      </p>
      <div class="d-flex justify-content-between">
        <span class="text-muted">🙂❤ 10 Reactions</span>
        <span class="text-muted">✨ 12 Replies</span>
      </div>
    `,
        time: "09.00AM",
    },
    {
        icon: "B",
        iconBg: "text-light-danger",
        name: "Betty Mante",
        description: "Request joined",
        tag: { text: "#reaserchteam", color: "danger" },
        suffix: "groups",
        // convert array -> html string
        actions: `
      <button class="btn btn-sm btn-danger me-2">Accept</button>
      <button class="btn btn-sm btn-outline-danger">Reject</button>
    `,
        time: "4 days ago",
    },
    {
        icon: "P",
        iconBg: "text-light-primary",
        name: "Pinkie",
        description: "uploaded 2 attachments",
        tag: { text: "#reaserchteam", color: "primary" },
        actions: `
      <button class="btn btn-sm btn-primary me-2">Accept</button>
      <button class="btn btn-sm btn-outline-primary">Reject</button>
    `,
        time: "4 days ago",
    },
];


export const profileProjects = [
    {
        id: 1,
        logo: "/images/icons/language/logo2.png",
        title: "Designing",
        subtitle: "Prototyping",
        startDate: "2024-02-03",
        endDate: "2024-04-05",
        pricing: "$280",
        description:
            "I am a keen, hardworking, reliable and excellent timekeeper. I am a bright and receptive person",
        progress: 100,
        status: "Completed",
        statusColor: "success",
        members: 10,
        avatars: ["/images/avatar/4.png", "/images/avatar/1.png"],
        additionalMembers: 5,
    },
    {
        id: 2,
        logo: "/images/icons/language/logo4.png",
        title: "Web Development",
        subtitle: "Weather Application",
        startDate: "2024-06-16",
        endDate: "2024-12-01",
        pricing: "$400k",
        description:
            "I am a keen, hardworking, reliable and excellent timekeeper. I am a bright and receptive person",
        progress: 40,
        status: "In Progress",
        statusColor: "primary",
        members: 34,
        avatars: [
            "/images/avatar/4.png",
            "/images/avatar/1.png",
            "/images/avatar/5.png",
        ],
        additionalMembers: 10,
    },
]

export const profileMessages = [
    { id: 1, name: "Elyssa Moen", initials: "EM", message: "It was quite good.🥳 We can continue with the next assignment.", color: "danger" },
    { id: 2, name: "Mark", initials: "M", message: "Hey, can you tell me about the project's progress? I'm waiting for your response.", color: "secondary" },
    { id: 3, name: "David", initials: "D", message: "Awesome! 🤩 I like it. We can schedule a meeting for the next one.", color: "primary" },
    { id: 4, name: "Jessica", initials: "J", message: "I am really impressed! Can't wait to see the final result.", color: "primary" },
    { id: 5, name: "Elmer", initials: "E", message: "Hi! We can schedule a meeting for next week.", color: "secondary" },
]

export const posts = [
    {
        id: 1,
        user: {
            name: "Ninfa Monaldo",
            avatar: "/images/avatar/09.png",
            time: "20min ago",
        },
        postContent: "Exploring new horizons, one destination at a time.🌸✨",
        likes: "10k",
        comments: [
            { id: 1, name: "Bette Hagenes", avatar: "/images/avatar/woman.jpg", time: "1 min", comment: "Love your style! keep slaying." },
            { id: 2, name: "Emery McKenzie", avatar: "/images/avatar/4.png", time: "12 min", comment: "Amazing post! can't wait to see more." },
        ],
    },
]

export const friends = [
    {
        id: 1,
        name: "Fleta Walsh",
        job: "Web Developer",
        avatar: "/images/avatar/2.png",
        followers: "14k",
        following: "8k",
        description:
            "Web Developer 👩‍💼 at @TechFirm. Building innovative solutions for @PersonalProject in my free time.",
        chatLink: "/apps/chat",
    },
    {
        id: 2,
        name: "Bette Hagenes",
        job: "Web Designer",
        avatar: "/images/avatar/16.png",
        followers: "14k",
        following: "8k",
        description:
            "Transforming ideas into visually stunning 💻 websites for @FreelanceProject during my off hours.",
        chatLink: "/apps/chat",
    },
    {
        id: 3,
        name: "Heli Walsh",
        job: "UI/UX designer",
        avatar: "/images/avatar/1.png",
        followers: "14k",
        following: "8k",
        description: "Crafting intuitive experiences, one pixel at a time 📏📈.",
        chatLink: "/apps/chat",
    },
    {
        id: 4,
        name: "Lenora",
        job: "React Developer",
        avatar: "/images/avatar/10.png",
        followers: "14k",
        following: "8k",
        description:
            "Crafting dynamic, responsive, and efficient user interfaces with ⚡ power of React.",
        chatLink: "/apps/chat",
    },
]
