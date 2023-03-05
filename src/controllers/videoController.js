import Video from "../models/Video";
import User from "../models/User";

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  return res.render("home", { pageTitle: "Home", videos });
  // Video.find({}, (error, videos) => {
  //   console.log("render once");
  //   return res.render("home", { pageTitle: "Home", videos });
  // });
  // try {
  //   console.log("i start");
  //   const videos = await Video.find({});
  //   console.log("render once");
  //   return res.render("home", { pageTitle: "home", videos });
  //   // return res.send("Home page Videos");
  // } catch (error) {
  //   return res.render("server-error");
  // }

  // } catch (error) {
  //   return res.render("server-error",{error});
  //이렇게 에러메세지까지 표시가능
  // }
};

// export const home = (req, res) => {
//   console.log("Start");
//   Video.find({}, (error, videos) => {
// if(error){
//   return res.render("Server-error page")
// }
// return. res.render("home", {pageTitle:"home", videos})
//자바스크립트 callback 방식으로 에러찾기
//     res.render("home", { pageTitle: "Home", videos });
//     console.log("Finished");
//     console.log(videos);
//   });
//   console.log("I finish first maybe");
// };

export const watch = async (req, res) => {
  //같은표현 const id = req.params.id
  const { id } = req.params;
  const video = await Video.findById(id).populate("owner");

  if (!video) {
    return res.status(404).render("404", { pageTitle: "video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
  // console.log("show video", id);
  // console.log("video number", video);

  // return res.send(`See video ${req.params.id}`);
};
export const getEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    params: { id },
  } = req;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "video not found" });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
  // return res.send(`edit video ${req.params.id}`);
};
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    params: { id },
    body: { title, description, hashtags },
  } = req;
  const validation = await Video.exists({ _id: id });
  if (!validation) {
    return res.status(404).render("404", { pageTitle: "video not found" });
  }

  if (String(validation.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags
  //   .split(",")
  //   .map((word) => (word.startsWith("#") ? word : `#${word}`));
  // await video.save();
  // 내가 지금 입력한 이름으로 video title을 갱신한다
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload Video" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description, hashtags },
    file: { path: fileUrl },
    session: {
      user: { _id },
    },
  } = req;
  // await Video.create({})
  try {
    const newVideo = await Video.create({
      fileUrl,
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
      owner: _id,
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    // const video = new Video({
    //   title,
    //   // title:title,과 같은 코드임
    //   description,
    //   //description:description, 과 같음
    //   // createdAt: Date.now(),
    //   hashtags: hashtags.split(",").map((word) => `#${word}`),
    // });
    // await video.save();
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "upload Video",
      errorMessage: error._message,
    });
  }
};
export const deleteVideo = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    params: { id },
  } = req;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "video not found" });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { key } = req.query;
  let videos = [];
  if (key) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(key, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", videos });
};
