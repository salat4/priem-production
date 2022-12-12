import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Alexander_Lutchak from "../../../images/partners/Alexander_Lutchak.png";
import Alexandra_Degas from "../../../images/partners/Alexandra_Degas.png";
import Backdrop from "../../../General/Backdrop";
import ReactPlayer from "react-player";
const BASE_URL_VIMEO = "https://player.vimeo.com";
// import { useRouter } from "next/router";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  const [vid, setVid] = useState(null);
  const [video, setVideo] = useState(null);

  // const router = useRouter();
  const getVideo = (str) => {
    setVideo(str);
    // axios
    //   .get("http://localhost:8080/video")
    //   .then((res) => {
    //     console.log(res.data);
    //     // const qwe = new DOMParser()
    //     //   .parseFromString(res.data.html, "text/html")
    //     //   .getElementsByTagName("iframe")[0];
    //     // console.log(qwe);
    //     // // router.push(res.data.player_embed_url);
    //     setVid(true);
    //   })
    //   .catch((error) => console.log(error));
  };

  useEffect(() => {
    // const data = [
    //   {
    //     uri: "/videos/780329353",
    //     name: "Volna.mp4",
    //     description: null,
    //     type: "video",
    //     link: "https://vimeo.com/780329353",
    //     player_embed_url:
    //       "https://player.vimeo.com/video/780329353?h=5eddbd85d2",
    //     duration: 30,
    //     width: 1280,
    //     language: null,
    //     height: 720,
    //     embed: {
    //       html: '<iframe src="https://player.vimeo.com/video/780329353?h=5eddbd85d2&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=257450" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Volna.mp4"></iframe>',
    //       badges: {
    //         hdr: false,
    //         live: { streaming: false, archived: false },
    //         staff_pick: {
    //           normal: false,
    //           best_of_the_month: false,
    //           best_of_the_year: false,
    //           premiere: false,
    //         },
    //         vod: false,
    //         weekend_challenge: false,
    //       },
    //       buttons: {
    //         watchlater: true,
    //         share: true,
    //         embed: true,
    //         hd: false,
    //         fullscreen: true,
    //         scaling: true,
    //         like: true,
    //       },
    //       logos: {
    //         vimeo: true,
    //         custom: { active: false, url: null, link: null, sticky: false },
    //       },
    //       title: { name: "user", owner: "user", portrait: "user" },
    //       end_screen: [],
    //       playbar: true,
    //       pip: true,
    //       autopip: true,
    //       volume: true,
    //       color: "00adef",
    //       event_schedule: true,
    //       interactive: false,
    //       uri: null,
    //       speed: true,
    //     },
    //     created_time: "2022-12-12T11:54:00+00:00",
    //     modified_time: "2022-12-12T11:55:10+00:00",
    //     release_time: "2022-12-12T11:54:00+00:00",
    //     content_rating: ["unrated"],
    //     content_rating_class: "unrated",
    //     rating_mod_locked: false,
    //     license: null,
    //     privacy: {
    //       view: "anybody",
    //       embed: "public",
    //       download: false,
    //       add: true,
    //       comments: "anybody",
    //     },
    //     pictures: {
    //       uri: "/videos/780329353/pictures/1566364266",
    //       active: true,
    //       type: "custom",
    //       base_link:
    //         "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d",
    //       sizes: [
    //         {
    //           width: 100,
    //           height: 75,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_100x75?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_100x75&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 200,
    //           height: 150,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_200x150?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 295,
    //           height: 166,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_295x166?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 640,
    //           height: 360,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_640x360?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 960,
    //           height: 540,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_960x540?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_960x540&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 1280,
    //           height: 720,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_1280x720?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 1920,
    //           height: 1080,
    //           link: "https://i.vimeocdn.com/video/1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_1920x1080?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1566364266-343119b02f0adaa95b20b95a9d67a70fe6717a88eaa4fad1b1a9a3685a7f0fa7-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //       ],
    //       resource_key: "c965704283d614108f3275299aab4a3667399b58",
    //       default_picture: false,
    //     },
    //     tags: [],
    //     stats: { plays: 0 },
    //     categories: [],
    //     uploader: {
    //       pictures: {
    //         uri: "/users/188189201/pictures/79229167",
    //         active: true,
    //         type: "custom",
    //         base_link: "https://i.vimeocdn.com/portrait/79229167",
    //         sizes: [
    //           {
    //             width: 30,
    //             height: 30,
    //             link: "https://i.vimeocdn.com/portrait/79229167_30x30",
    //           },
    //           {
    //             width: 72,
    //             height: 72,
    //             link: "https://i.vimeocdn.com/portrait/79229167_72x72",
    //           },
    //           {
    //             width: 75,
    //             height: 75,
    //             link: "https://i.vimeocdn.com/portrait/79229167_75x75",
    //           },
    //           {
    //             width: 100,
    //             height: 100,
    //             link: "https://i.vimeocdn.com/portrait/79229167_100x100",
    //           },
    //           {
    //             width: 144,
    //             height: 144,
    //             link: "https://i.vimeocdn.com/portrait/79229167_144x144",
    //           },
    //           {
    //             width: 216,
    //             height: 216,
    //             link: "https://i.vimeocdn.com/portrait/79229167_216x216",
    //           },
    //           {
    //             width: 288,
    //             height: 288,
    //             link: "https://i.vimeocdn.com/portrait/79229167_288x288",
    //           },
    //           {
    //             width: 300,
    //             height: 300,
    //             link: "https://i.vimeocdn.com/portrait/79229167_300x300",
    //           },
    //           {
    //             width: 360,
    //             height: 360,
    //             link: "https://i.vimeocdn.com/portrait/79229167_360x360",
    //           },
    //         ],
    //         resource_key: "08af21fa391ed0818a55deacf319c5f416fc32ce",
    //         default_picture: false,
    //       },
    //     },
    //     metadata: {
    //       connections: {
    //         comments: {
    //           uri: "/videos/780329353/comments",
    //           options: ["GET", "POST"],
    //           total: 0,
    //         },
    //         credits: {
    //           uri: "/videos/780329353/credits",
    //           options: ["GET", "POST"],
    //           total: 0,
    //         },
    //         likes: {
    //           uri: "/videos/780329353/likes",
    //           options: ["GET"],
    //           total: 0,
    //         },
    //         pictures: {
    //           uri: "/videos/780329353/pictures",
    //           options: ["GET", "POST"],
    //           total: 1,
    //         },
    //         texttracks: {
    //           uri: "/videos/780329353/texttracks",
    //           options: ["GET", "POST"],
    //           total: 0,
    //         },
    //         related: {
    //           uri: "/me/folders/13582138/videos?offset=1",
    //           options: ["GET"],
    //         },
    //         recommendations: {
    //           uri: "/videos/780329353/recommendations",
    //           options: ["GET"],
    //         },
    //         albums: {
    //           uri: "/videos/780329353/albums",
    //           options: ["GET", "PATCH"],
    //           total: 0,
    //         },
    //         available_albums: {
    //           uri: "/videos/780329353/available_albums",
    //           options: ["GET"],
    //           total: 0,
    //         },
    //         available_channels: {
    //           uri: "/videos/780329353/available_channels",
    //           options: ["GET"],
    //           total: 0,
    //         },
    //         versions: {
    //           uri: "/videos/780329353/versions",
    //           options: ["GET"],
    //           total: 1,
    //           current_uri: "/videos/780329353/versions/749076133",
    //           resource_key: "87817bf8bae2d5e463ea757336f4c85e3d66feb8",
    //           latest_incomplete_version: null,
    //         },
    //       },
    //       interactions: {
    //         watchlater: {
    //           uri: "/users/188189201/watchlater/780329353",
    //           options: ["GET", "PUT", "DELETE"],
    //           added: false,
    //           added_time: null,
    //         },
    //         report: {
    //           uri: "/videos/780329353/report",
    //           options: ["POST"],
    //           reason: [
    //             "pornographic",
    //             "harassment",
    //             "ripoff",
    //             "incorrect rating",
    //             "spam",
    //             "causes harm",
    //             "csam",
    //           ],
    //         },
    //         view_team_members: {
    //           uri: "/videos/780329353/teammembers",
    //           options: ["GET"],
    //         },
    //         edit: {
    //           uri: "/videos/780329353",
    //           options: ["PATCH"],
    //           blocked_fields: ["custom_url"],
    //         },
    //         edit_content_rating: {
    //           uri: "/videos/780329353",
    //           options: ["PATCH"],
    //           content_rating: [
    //             "language",
    //             "drugs",
    //             "violence",
    //             "nudity",
    //             "advertisement",
    //             "safe",
    //             "unrated",
    //           ],
    //         },
    //         edit_privacy: {
    //           uri: "/videos/780329353",
    //           options: ["PATCH"],
    //           content_type: "application/vnd.vimeo.video",
    //           properties: [
    //             {
    //               name: "privacy.view",
    //               required: true,
    //               options: [
    //                 "anybody",
    //                 "nobody",
    //                 "password",
    //                 "disable",
    //                 "unlisted",
    //               ],
    //             },
    //           ],
    //         },
    //         delete: { uri: "/videos/780329353", options: ["DELETE"] },
    //         can_update_privacy_to_public: {
    //           uri: "/videos/780329353",
    //           options: ["PATCH"],
    //         },
    //         trim: {
    //           uri: "/videos/780329353/cliptrim",
    //           options: ["GET", "POST"],
    //         },
    //         validate: { uri: "/videos/780329353/validate", options: ["PUT"] },
    //       },
    //       is_vimeo_create: false,
    //       is_screen_record: false,
    //     },
    //     manage_link: "/manage/videos/780329353",
    //     user: {
    //       uri: "/users/188189201",
    //       name: "Mark Nelovka",
    //       link: "https://vimeo.com/user188189201",
    //       capabilities: {
    //         hasLiveSubscription: false,
    //         hasEnterpriseLihp: false,
    //         hasSvvTimecodedComments: false,
    //         hasSimplifiedEnterpriseAccount: false,
    //       },
    //       location: "",
    //       gender: "",
    //       bio: null,
    //       short_bio: null,
    //       created_time: "2022-11-05T12:18:56+00:00",
    //       pictures: {
    //         uri: "/users/188189201/pictures/79229167",
    //         active: true,
    //         type: "custom",
    //         base_link: "https://i.vimeocdn.com/portrait/79229167",
    //         sizes: [
    //           {
    //             width: 30,
    //             height: 30,
    //             link: "https://i.vimeocdn.com/portrait/79229167_30x30",
    //           },
    //           {
    //             width: 72,
    //             height: 72,
    //             link: "https://i.vimeocdn.com/portrait/79229167_72x72",
    //           },
    //           {
    //             width: 75,
    //             height: 75,
    //             link: "https://i.vimeocdn.com/portrait/79229167_75x75",
    //           },
    //           {
    //             width: 100,
    //             height: 100,
    //             link: "https://i.vimeocdn.com/portrait/79229167_100x100",
    //           },
    //           {
    //             width: 144,
    //             height: 144,
    //             link: "https://i.vimeocdn.com/portrait/79229167_144x144",
    //           },
    //           {
    //             width: 216,
    //             height: 216,
    //             link: "https://i.vimeocdn.com/portrait/79229167_216x216",
    //           },
    //           {
    //             width: 288,
    //             height: 288,
    //             link: "https://i.vimeocdn.com/portrait/79229167_288x288",
    //           },
    //           {
    //             width: 300,
    //             height: 300,
    //             link: "https://i.vimeocdn.com/portrait/79229167_300x300",
    //           },
    //           {
    //             width: 360,
    //             height: 360,
    //             link: "https://i.vimeocdn.com/portrait/79229167_360x360",
    //           },
    //         ],
    //         resource_key: "08af21fa391ed0818a55deacf319c5f416fc32ce",
    //         default_picture: false,
    //       },
    //       websites: [],
    //       metadata: {
    //         connections: {
    //           albums: {
    //             uri: "/users/188189201/albums",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           appearances: {
    //             uri: "/users/188189201/appearances",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           categories: {
    //             uri: "/users/188189201/categories",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           channels: {
    //             uri: "/users/188189201/channels",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           feed: { uri: "/users/188189201/feed", options: ["GET"] },
    //           followers: {
    //             uri: "/users/188189201/followers",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           following: {
    //             uri: "/users/188189201/following",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           groups: {
    //             uri: "/users/188189201/groups",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           likes: {
    //             uri: "/users/188189201/likes",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           membership: {
    //             uri: "/users/188189201/membership/",
    //             options: ["PATCH"],
    //           },
    //           moderated_channels: {
    //             uri: "/users/188189201/channels?filter=moderated",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           portfolios: {
    //             uri: "/users/188189201/portfolios",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           videos: {
    //             uri: "/users/188189201/videos",
    //             options: ["GET"],
    //             total: 2,
    //           },
    //           watchlater: {
    //             uri: "/users/188189201/watchlater",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           shared: {
    //             uri: "/users/188189201/shared/videos",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           pictures: {
    //             uri: "/users/188189201/pictures",
    //             options: ["GET", "POST"],
    //             total: 1,
    //           },
    //           watched_videos: {
    //             uri: "/me/watched/videos",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           folders_root: {
    //             uri: "/users/188189201/folders/root",
    //             options: ["GET"],
    //           },
    //           folders: {
    //             uri: "/users/188189201/folders",
    //             options: ["GET", "POST"],
    //             total: 1,
    //           },
    //           teams: {
    //             uri: "/users/188189201/teams",
    //             options: ["GET"],
    //             total: 1,
    //           },
    //           block: { uri: "/me/block", options: ["GET"], total: 0 },
    //         },
    //       },
    //       location_details: {
    //         formatted_address: "",
    //         latitude: null,
    //         longitude: null,
    //         city: null,
    //         state: null,
    //         neighborhood: null,
    //         sub_locality: null,
    //         state_iso_code: null,
    //         country: null,
    //         country_iso_code: null,
    //       },
    //       skills: [],
    //       available_for_hire: false,
    //       can_work_remotely: false,
    //       preferences: {
    //         videos: {
    //           rating: ["unrated"],
    //           privacy: {
    //             view: "anybody",
    //             comments: "anybody",
    //             embed: "public",
    //             download: true,
    //             add: true,
    //             allow_share_link: true,
    //           },
    //         },
    //         webinar_registrant_lower_watermark_banner_dismissed: [],
    //       },
    //       content_filter: [
    //         "language",
    //         "drugs",
    //         "violence",
    //         "nudity",
    //         "safe",
    //         "unrated",
    //       ],
    //       upload_quota: {
    //         space: {
    //           free: 1,
    //           max: 2,
    //           used: 1,
    //           showing: "periodic",
    //           unit: "video_count",
    //         },
    //         periodic: {
    //           period: "month",
    //           unit: "video_count",
    //           free: 1,
    //           max: 2,
    //           used: 1,
    //           reset_date: "2023-01-05T00:00:00-05:00",
    //         },
    //         lifetime: { unit: "video_count", free: 23, max: 25, used: 2 },
    //       },
    //       resource_key: "9f5732030f686afa85aad9b20e0e339f8cbd6b46",
    //       account: "free",
    //     },
    //     parent_folder: {
    //       created_time: "2022-11-05T12:19:40+00:00",
    //       modified_time: "2022-12-12T12:19:37+00:00",
    //       last_user_action_event_date: "2022-12-12T12:19:37+00:00",
    //       name: "Ira hero",
    //       privacy: { view: "nobody" },
    //       resource_key: "70dc311e685d4e3b9739ee0473f357f2f05feeaf",
    //       uri: "/users/188189201/projects/13582138",
    //       link: null,
    //       pinned_on: null,
    //       is_pinned: false,
    //       is_private_to_user: false,
    //       user: {
    //         uri: "/users/188189201",
    //         name: "Mark Nelovka",
    //         link: "https://vimeo.com/user188189201",
    //         capabilities: {
    //           hasLiveSubscription: false,
    //           hasEnterpriseLihp: false,
    //           hasSvvTimecodedComments: false,
    //           hasSimplifiedEnterpriseAccount: false,
    //         },
    //         location: "",
    //         gender: "",
    //         bio: null,
    //         short_bio: null,
    //         created_time: "2022-11-05T12:18:56+00:00",
    //         pictures: {
    //           uri: "/users/188189201/pictures/79229167",
    //           active: true,
    //           type: "custom",
    //           base_link: "https://i.vimeocdn.com/portrait/79229167",
    //           sizes: [
    //             {
    //               width: 30,
    //               height: 30,
    //               link: "https://i.vimeocdn.com/portrait/79229167_30x30",
    //             },
    //             {
    //               width: 72,
    //               height: 72,
    //               link: "https://i.vimeocdn.com/portrait/79229167_72x72",
    //             },
    //             {
    //               width: 75,
    //               height: 75,
    //               link: "https://i.vimeocdn.com/portrait/79229167_75x75",
    //             },
    //             {
    //               width: 100,
    //               height: 100,
    //               link: "https://i.vimeocdn.com/portrait/79229167_100x100",
    //             },
    //             {
    //               width: 144,
    //               height: 144,
    //               link: "https://i.vimeocdn.com/portrait/79229167_144x144",
    //             },
    //             {
    //               width: 216,
    //               height: 216,
    //               link: "https://i.vimeocdn.com/portrait/79229167_216x216",
    //             },
    //             {
    //               width: 288,
    //               height: 288,
    //               link: "https://i.vimeocdn.com/portrait/79229167_288x288",
    //             },
    //             {
    //               width: 300,
    //               height: 300,
    //               link: "https://i.vimeocdn.com/portrait/79229167_300x300",
    //             },
    //             {
    //               width: 360,
    //               height: 360,
    //               link: "https://i.vimeocdn.com/portrait/79229167_360x360",
    //             },
    //           ],
    //           resource_key: "08af21fa391ed0818a55deacf319c5f416fc32ce",
    //           default_picture: false,
    //         },
    //         websites: [],
    //         metadata: {
    //           connections: {
    //             albums: {
    //               uri: "/users/188189201/albums",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             appearances: {
    //               uri: "/users/188189201/appearances",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             categories: {
    //               uri: "/users/188189201/categories",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             channels: {
    //               uri: "/users/188189201/channels",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             feed: { uri: "/users/188189201/feed", options: ["GET"] },
    //             followers: {
    //               uri: "/users/188189201/followers",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             following: {
    //               uri: "/users/188189201/following",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             groups: {
    //               uri: "/users/188189201/groups",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             likes: {
    //               uri: "/users/188189201/likes",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             membership: {
    //               uri: "/users/188189201/membership/",
    //               options: ["PATCH"],
    //             },
    //             moderated_channels: {
    //               uri: "/users/188189201/channels?filter=moderated",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             portfolios: {
    //               uri: "/users/188189201/portfolios",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             videos: {
    //               uri: "/users/188189201/videos",
    //               options: ["GET"],
    //               total: 2,
    //             },
    //             watchlater: {
    //               uri: "/users/188189201/watchlater",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             shared: {
    //               uri: "/users/188189201/shared/videos",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             pictures: {
    //               uri: "/users/188189201/pictures",
    //               options: ["GET", "POST"],
    //               total: 1,
    //             },
    //             watched_videos: {
    //               uri: "/me/watched/videos",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             folders_root: {
    //               uri: "/users/188189201/folders/root",
    //               options: ["GET"],
    //             },
    //             folders: {
    //               uri: "/users/188189201/folders",
    //               options: ["GET", "POST"],
    //               total: 1,
    //             },
    //             teams: {
    //               uri: "/users/188189201/teams",
    //               options: ["GET"],
    //               total: 1,
    //             },
    //             block: { uri: "/me/block", options: ["GET"], total: 0 },
    //           },
    //         },
    //         location_details: {
    //           formatted_address: "",
    //           latitude: null,
    //           longitude: null,
    //           city: null,
    //           state: null,
    //           neighborhood: null,
    //           sub_locality: null,
    //           state_iso_code: null,
    //           country: null,
    //           country_iso_code: null,
    //         },
    //         skills: [],
    //         available_for_hire: false,
    //         can_work_remotely: false,
    //         preferences: {
    //           videos: {
    //             rating: ["unrated"],
    //             privacy: {
    //               view: "anybody",
    //               comments: "anybody",
    //               embed: "public",
    //               download: true,
    //               add: true,
    //               allow_share_link: true,
    //             },
    //           },
    //           webinar_registrant_lower_watermark_banner_dismissed: [],
    //         },
    //         content_filter: [
    //           "language",
    //           "drugs",
    //           "violence",
    //           "nudity",
    //           "safe",
    //           "unrated",
    //         ],
    //         upload_quota: {
    //           space: {
    //             free: 1,
    //             max: 2,
    //             used: 1,
    //             showing: "periodic",
    //             unit: "video_count",
    //           },
    //           periodic: {
    //             period: "month",
    //             unit: "video_count",
    //             free: 1,
    //             max: 2,
    //             used: 1,
    //             reset_date: "2023-01-05T00:00:00-05:00",
    //           },
    //           lifetime: { unit: "video_count", free: 23, max: 25, used: 2 },
    //         },
    //         resource_key: "9f5732030f686afa85aad9b20e0e339f8cbd6b46",
    //         account: "free",
    //       },
    //       access_grant: null,
    //       metadata: {
    //         connections: {
    //           items: {
    //             uri: "/users/188189201/projects/13582138/items",
    //             options: ["GET"],
    //             total: 2,
    //           },
    //           videos: {
    //             uri: "/users/188189201/projects/13582138/videos",
    //             options: ["GET", "DELETE", "PUT"],
    //             total: 2,
    //           },
    //           folders: {
    //             uri: "/users/188189201/projects/13582138/items",
    //             options: ["GET", "DELETE", "PUT"],
    //             total: 0,
    //           },
    //           ancestor_path: [],
    //         },
    //         interactions: {
    //           edit: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["PATCH"],
    //           },
    //           move_video: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["PATCH"],
    //           },
    //           upload_video: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["POST"],
    //           },
    //           view: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["GET"],
    //           },
    //           edit_settings: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["PATCH"],
    //           },
    //           delete: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["DELETE"],
    //           },
    //           delete_video: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["DELETE"],
    //           },
    //           add_subfolder: {
    //             uri: "/user/188189201/projects",
    //             options: ["POST"],
    //             can_add_subfolders: true,
    //             subfolder_depth_limit_reached: false,
    //             content_type: "application/vnd.vimeo.folder",
    //             properties: [
    //               { name: "name", required: false, value: "" },
    //               {
    //                 name: "parent_folder_uri",
    //                 required: true,
    //                 value: "/users/188189201/projects/13582138",
    //               },
    //             ],
    //           },
    //         },
    //       },
    //     },
    //     last_user_action_event_date: "2022-12-12T11:54:26+00:00",
    //     review_page: {
    //       active: true,
    //       link: "https://vimeo.com/user188189201/review/780329353/8d48779987",
    //       is_shareable: true,
    //     },
    //     play: { status: "playable" },
    //     app: { name: "Parallel Uploader", uri: "/apps/87099" },
    //     status: "available",
    //     resource_key: "8de82db3155d0f71c136ea9d4faac2549e7dfc2c",
    //     upload: {
    //       status: "complete",
    //       link: null,
    //       upload_link: null,
    //       complete_uri: null,
    //       form: null,
    //       approach: null,
    //       size: null,
    //       redirect_url: null,
    //     },
    //     transcode: { status: "complete" },
    //     is_playable: true,
    //     has_audio: false,
    //   },
    //   {
    //     uri: "/videos/767582772",
    //     name: "IMG_4740",
    //     description: null,
    //     type: "video",
    //     link: "https://vimeo.com/767582772",
    //     player_embed_url:
    //       "https://player.vimeo.com/video/767582772?h=6a89bce21d",
    //     duration: 18,
    //     width: 1920,
    //     language: null,
    //     height: 1080,
    //     embed: {
    //       html: '<iframe src="https://player.vimeo.com/video/767582772?h=6a89bce21d&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=257450" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="IMG_4740"></iframe>',
    //       badges: {
    //         hdr: false,
    //         live: { streaming: false, archived: false },
    //         staff_pick: {
    //           normal: false,
    //           best_of_the_month: false,
    //           best_of_the_year: false,
    //           premiere: false,
    //         },
    //         vod: false,
    //         weekend_challenge: false,
    //       },
    //       buttons: {
    //         watchlater: true,
    //         share: true,
    //         embed: true,
    //         hd: false,
    //         fullscreen: true,
    //         scaling: true,
    //         like: true,
    //       },
    //       logos: {
    //         vimeo: true,
    //         custom: { active: false, url: null, link: null, sticky: false },
    //       },
    //       title: { name: "user", owner: "user", portrait: "user" },
    //       end_screen: [],
    //       playbar: true,
    //       pip: true,
    //       autopip: true,
    //       volume: true,
    //       color: "00adef",
    //       event_schedule: true,
    //       interactive: false,
    //       uri: null,
    //       speed: true,
    //     },
    //     created_time: "2022-11-05T12:22:28+00:00",
    //     modified_time: "2022-12-12T12:19:37+00:00",
    //     release_time: "2022-11-05T12:22:28+00:00",
    //     content_rating: ["unrated"],
    //     content_rating_class: "unrated",
    //     rating_mod_locked: false,
    //     license: null,
    //     privacy: {
    //       view: "anybody",
    //       embed: "public",
    //       download: false,
    //       add: true,
    //       comments: "anybody",
    //     },
    //     pictures: {
    //       uri: "/videos/767582772/pictures/1541121920",
    //       active: true,
    //       type: "custom",
    //       base_link:
    //         "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d",
    //       sizes: [
    //         {
    //           width: 100,
    //           height: 75,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_100x75?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_100x75&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 200,
    //           height: 150,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_200x150?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 295,
    //           height: 166,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_295x166?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 640,
    //           height: 360,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_640x360?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 960,
    //           height: 540,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_960x540?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_960x540&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 1280,
    //           height: 720,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_1280x720?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //         {
    //           width: 1920,
    //           height: 1080,
    //           link: "https://i.vimeocdn.com/video/1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_1920x1080?r=pad",
    //           link_with_play_button:
    //             "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1541121920-9f2fa906ebb7dfe34cddf4bc6a3c91295fae0b543db1111b537359fff0bd7bbf-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
    //         },
    //       ],
    //       resource_key: "27c8b7fa830923d9a8ce290fd47e5152b594974d",
    //       default_picture: false,
    //     },
    //     tags: [],
    //     stats: { plays: 29 },
    //     categories: [],
    //     uploader: {
    //       pictures: {
    //         uri: "/users/188189201/pictures/79229167",
    //         active: true,
    //         type: "custom",
    //         base_link: "https://i.vimeocdn.com/portrait/79229167",
    //         sizes: [
    //           {
    //             width: 30,
    //             height: 30,
    //             link: "https://i.vimeocdn.com/portrait/79229167_30x30",
    //           },
    //           {
    //             width: 72,
    //             height: 72,
    //             link: "https://i.vimeocdn.com/portrait/79229167_72x72",
    //           },
    //           {
    //             width: 75,
    //             height: 75,
    //             link: "https://i.vimeocdn.com/portrait/79229167_75x75",
    //           },
    //           {
    //             width: 100,
    //             height: 100,
    //             link: "https://i.vimeocdn.com/portrait/79229167_100x100",
    //           },
    //           {
    //             width: 144,
    //             height: 144,
    //             link: "https://i.vimeocdn.com/portrait/79229167_144x144",
    //           },
    //           {
    //             width: 216,
    //             height: 216,
    //             link: "https://i.vimeocdn.com/portrait/79229167_216x216",
    //           },
    //           {
    //             width: 288,
    //             height: 288,
    //             link: "https://i.vimeocdn.com/portrait/79229167_288x288",
    //           },
    //           {
    //             width: 300,
    //             height: 300,
    //             link: "https://i.vimeocdn.com/portrait/79229167_300x300",
    //           },
    //           {
    //             width: 360,
    //             height: 360,
    //             link: "https://i.vimeocdn.com/portrait/79229167_360x360",
    //           },
    //         ],
    //         resource_key: "08af21fa391ed0818a55deacf319c5f416fc32ce",
    //         default_picture: false,
    //       },
    //     },
    //     metadata: {
    //       connections: {
    //         comments: {
    //           uri: "/videos/767582772/comments",
    //           options: ["GET", "POST"],
    //           total: 0,
    //         },
    //         credits: {
    //           uri: "/videos/767582772/credits",
    //           options: ["GET", "POST"],
    //           total: 0,
    //         },
    //         likes: {
    //           uri: "/videos/767582772/likes",
    //           options: ["GET"],
    //           total: 0,
    //         },
    //         pictures: {
    //           uri: "/videos/767582772/pictures",
    //           options: ["GET", "POST"],
    //           total: 1,
    //         },
    //         texttracks: {
    //           uri: "/videos/767582772/texttracks",
    //           options: ["GET", "POST"],
    //           total: 0,
    //         },
    //         related: null,
    //         recommendations: {
    //           uri: "/videos/767582772/recommendations",
    //           options: ["GET"],
    //         },
    //         albums: {
    //           uri: "/videos/767582772/albums",
    //           options: ["GET", "PATCH"],
    //           total: 0,
    //         },
    //         available_albums: {
    //           uri: "/videos/767582772/available_albums",
    //           options: ["GET"],
    //           total: 0,
    //         },
    //         available_channels: {
    //           uri: "/videos/767582772/available_channels",
    //           options: ["GET"],
    //           total: 0,
    //         },
    //         versions: {
    //           uri: "/videos/767582772/versions",
    //           options: ["GET"],
    //           total: 1,
    //           current_uri: "/videos/767582772/versions/734050023",
    //           resource_key: "8c9dcbff28c64cac16e8756c92737c099fc6a6cb",
    //           latest_incomplete_version: null,
    //         },
    //       },
    //       interactions: {
    //         watchlater: {
    //           uri: "/users/188189201/watchlater/767582772",
    //           options: ["GET", "PUT", "DELETE"],
    //           added: false,
    //           added_time: null,
    //         },
    //         report: {
    //           uri: "/videos/767582772/report",
    //           options: ["POST"],
    //           reason: [
    //             "pornographic",
    //             "harassment",
    //             "ripoff",
    //             "incorrect rating",
    //             "spam",
    //             "causes harm",
    //             "csam",
    //           ],
    //         },
    //         view_team_members: {
    //           uri: "/videos/767582772/teammembers",
    //           options: ["GET"],
    //         },
    //         edit: {
    //           uri: "/videos/767582772",
    //           options: ["PATCH"],
    //           blocked_fields: ["custom_url"],
    //         },
    //         edit_content_rating: {
    //           uri: "/videos/767582772",
    //           options: ["PATCH"],
    //           content_rating: [
    //             "language",
    //             "drugs",
    //             "violence",
    //             "nudity",
    //             "advertisement",
    //             "safe",
    //             "unrated",
    //           ],
    //         },
    //         edit_privacy: {
    //           uri: "/videos/767582772",
    //           options: ["PATCH"],
    //           content_type: "application/vnd.vimeo.video",
    //           properties: [
    //             {
    //               name: "privacy.view",
    //               required: true,
    //               options: [
    //                 "anybody",
    //                 "nobody",
    //                 "password",
    //                 "disable",
    //                 "unlisted",
    //               ],
    //             },
    //           ],
    //         },
    //         delete: { uri: "/videos/767582772", options: ["DELETE"] },
    //         can_update_privacy_to_public: {
    //           uri: "/videos/767582772",
    //           options: ["PATCH"],
    //         },
    //         trim: {
    //           uri: "/videos/767582772/cliptrim",
    //           options: ["GET", "POST"],
    //         },
    //         validate: { uri: "/videos/767582772/validate", options: ["PUT"] },
    //       },
    //       is_vimeo_create: false,
    //       is_screen_record: false,
    //     },
    //     manage_link: "/manage/videos/767582772",
    //     user: {
    //       uri: "/users/188189201",
    //       name: "Mark Nelovka",
    //       link: "https://vimeo.com/user188189201",
    //       capabilities: {
    //         hasLiveSubscription: false,
    //         hasEnterpriseLihp: false,
    //         hasSvvTimecodedComments: false,
    //         hasSimplifiedEnterpriseAccount: false,
    //       },
    //       location: "",
    //       gender: "",
    //       bio: null,
    //       short_bio: null,
    //       created_time: "2022-11-05T12:18:56+00:00",
    //       pictures: {
    //         uri: "/users/188189201/pictures/79229167",
    //         active: true,
    //         type: "custom",
    //         base_link: "https://i.vimeocdn.com/portrait/79229167",
    //         sizes: [
    //           {
    //             width: 30,
    //             height: 30,
    //             link: "https://i.vimeocdn.com/portrait/79229167_30x30",
    //           },
    //           {
    //             width: 72,
    //             height: 72,
    //             link: "https://i.vimeocdn.com/portrait/79229167_72x72",
    //           },
    //           {
    //             width: 75,
    //             height: 75,
    //             link: "https://i.vimeocdn.com/portrait/79229167_75x75",
    //           },
    //           {
    //             width: 100,
    //             height: 100,
    //             link: "https://i.vimeocdn.com/portrait/79229167_100x100",
    //           },
    //           {
    //             width: 144,
    //             height: 144,
    //             link: "https://i.vimeocdn.com/portrait/79229167_144x144",
    //           },
    //           {
    //             width: 216,
    //             height: 216,
    //             link: "https://i.vimeocdn.com/portrait/79229167_216x216",
    //           },
    //           {
    //             width: 288,
    //             height: 288,
    //             link: "https://i.vimeocdn.com/portrait/79229167_288x288",
    //           },
    //           {
    //             width: 300,
    //             height: 300,
    //             link: "https://i.vimeocdn.com/portrait/79229167_300x300",
    //           },
    //           {
    //             width: 360,
    //             height: 360,
    //             link: "https://i.vimeocdn.com/portrait/79229167_360x360",
    //           },
    //         ],
    //         resource_key: "08af21fa391ed0818a55deacf319c5f416fc32ce",
    //         default_picture: false,
    //       },
    //       websites: [],
    //       metadata: {
    //         connections: {
    //           albums: {
    //             uri: "/users/188189201/albums",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           appearances: {
    //             uri: "/users/188189201/appearances",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           categories: {
    //             uri: "/users/188189201/categories",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           channels: {
    //             uri: "/users/188189201/channels",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           feed: { uri: "/users/188189201/feed", options: ["GET"] },
    //           followers: {
    //             uri: "/users/188189201/followers",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           following: {
    //             uri: "/users/188189201/following",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           groups: {
    //             uri: "/users/188189201/groups",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           likes: {
    //             uri: "/users/188189201/likes",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           membership: {
    //             uri: "/users/188189201/membership/",
    //             options: ["PATCH"],
    //           },
    //           moderated_channels: {
    //             uri: "/users/188189201/channels?filter=moderated",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           portfolios: {
    //             uri: "/users/188189201/portfolios",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           videos: {
    //             uri: "/users/188189201/videos",
    //             options: ["GET"],
    //             total: 2,
    //           },
    //           watchlater: {
    //             uri: "/users/188189201/watchlater",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           shared: {
    //             uri: "/users/188189201/shared/videos",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           pictures: {
    //             uri: "/users/188189201/pictures",
    //             options: ["GET", "POST"],
    //             total: 1,
    //           },
    //           watched_videos: {
    //             uri: "/me/watched/videos",
    //             options: ["GET"],
    //             total: 0,
    //           },
    //           folders_root: {
    //             uri: "/users/188189201/folders/root",
    //             options: ["GET"],
    //           },
    //           folders: {
    //             uri: "/users/188189201/folders",
    //             options: ["GET", "POST"],
    //             total: 1,
    //           },
    //           teams: {
    //             uri: "/users/188189201/teams",
    //             options: ["GET"],
    //             total: 1,
    //           },
    //           block: { uri: "/me/block", options: ["GET"], total: 0 },
    //         },
    //       },
    //       location_details: {
    //         formatted_address: "",
    //         latitude: null,
    //         longitude: null,
    //         city: null,
    //         state: null,
    //         neighborhood: null,
    //         sub_locality: null,
    //         state_iso_code: null,
    //         country: null,
    //         country_iso_code: null,
    //       },
    //       skills: [],
    //       available_for_hire: false,
    //       can_work_remotely: false,
    //       preferences: {
    //         videos: {
    //           rating: ["unrated"],
    //           privacy: {
    //             view: "anybody",
    //             comments: "anybody",
    //             embed: "public",
    //             download: true,
    //             add: true,
    //             allow_share_link: true,
    //           },
    //         },
    //         webinar_registrant_lower_watermark_banner_dismissed: [],
    //       },
    //       content_filter: [
    //         "language",
    //         "drugs",
    //         "violence",
    //         "nudity",
    //         "safe",
    //         "unrated",
    //       ],
    //       upload_quota: {
    //         space: {
    //           free: 1,
    //           max: 2,
    //           used: 1,
    //           showing: "periodic",
    //           unit: "video_count",
    //         },
    //         periodic: {
    //           period: "month",
    //           unit: "video_count",
    //           free: 1,
    //           max: 2,
    //           used: 1,
    //           reset_date: "2023-01-05T00:00:00-05:00",
    //         },
    //         lifetime: { unit: "video_count", free: 23, max: 25, used: 2 },
    //       },
    //       resource_key: "9f5732030f686afa85aad9b20e0e339f8cbd6b46",
    //       account: "free",
    //     },
    //     parent_folder: {
    //       created_time: "2022-11-05T12:19:40+00:00",
    //       modified_time: "2022-12-12T12:19:37+00:00",
    //       last_user_action_event_date: "2022-12-12T12:19:37+00:00",
    //       name: "Ira hero",
    //       privacy: { view: "nobody" },
    //       resource_key: "70dc311e685d4e3b9739ee0473f357f2f05feeaf",
    //       uri: "/users/188189201/projects/13582138",
    //       link: null,
    //       pinned_on: null,
    //       is_pinned: false,
    //       is_private_to_user: false,
    //       user: {
    //         uri: "/users/188189201",
    //         name: "Mark Nelovka",
    //         link: "https://vimeo.com/user188189201",
    //         capabilities: {
    //           hasLiveSubscription: false,
    //           hasEnterpriseLihp: false,
    //           hasSvvTimecodedComments: false,
    //           hasSimplifiedEnterpriseAccount: false,
    //         },
    //         location: "",
    //         gender: "",
    //         bio: null,
    //         short_bio: null,
    //         created_time: "2022-11-05T12:18:56+00:00",
    //         pictures: {
    //           uri: "/users/188189201/pictures/79229167",
    //           active: true,
    //           type: "custom",
    //           base_link: "https://i.vimeocdn.com/portrait/79229167",
    //           sizes: [
    //             {
    //               width: 30,
    //               height: 30,
    //               link: "https://i.vimeocdn.com/portrait/79229167_30x30",
    //             },
    //             {
    //               width: 72,
    //               height: 72,
    //               link: "https://i.vimeocdn.com/portrait/79229167_72x72",
    //             },
    //             {
    //               width: 75,
    //               height: 75,
    //               link: "https://i.vimeocdn.com/portrait/79229167_75x75",
    //             },
    //             {
    //               width: 100,
    //               height: 100,
    //               link: "https://i.vimeocdn.com/portrait/79229167_100x100",
    //             },
    //             {
    //               width: 144,
    //               height: 144,
    //               link: "https://i.vimeocdn.com/portrait/79229167_144x144",
    //             },
    //             {
    //               width: 216,
    //               height: 216,
    //               link: "https://i.vimeocdn.com/portrait/79229167_216x216",
    //             },
    //             {
    //               width: 288,
    //               height: 288,
    //               link: "https://i.vimeocdn.com/portrait/79229167_288x288",
    //             },
    //             {
    //               width: 300,
    //               height: 300,
    //               link: "https://i.vimeocdn.com/portrait/79229167_300x300",
    //             },
    //             {
    //               width: 360,
    //               height: 360,
    //               link: "https://i.vimeocdn.com/portrait/79229167_360x360",
    //             },
    //           ],
    //           resource_key: "08af21fa391ed0818a55deacf319c5f416fc32ce",
    //           default_picture: false,
    //         },
    //         websites: [],
    //         metadata: {
    //           connections: {
    //             albums: {
    //               uri: "/users/188189201/albums",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             appearances: {
    //               uri: "/users/188189201/appearances",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             categories: {
    //               uri: "/users/188189201/categories",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             channels: {
    //               uri: "/users/188189201/channels",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             feed: { uri: "/users/188189201/feed", options: ["GET"] },
    //             followers: {
    //               uri: "/users/188189201/followers",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             following: {
    //               uri: "/users/188189201/following",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             groups: {
    //               uri: "/users/188189201/groups",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             likes: {
    //               uri: "/users/188189201/likes",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             membership: {
    //               uri: "/users/188189201/membership/",
    //               options: ["PATCH"],
    //             },
    //             moderated_channels: {
    //               uri: "/users/188189201/channels?filter=moderated",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             portfolios: {
    //               uri: "/users/188189201/portfolios",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             videos: {
    //               uri: "/users/188189201/videos",
    //               options: ["GET"],
    //               total: 2,
    //             },
    //             watchlater: {
    //               uri: "/users/188189201/watchlater",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             shared: {
    //               uri: "/users/188189201/shared/videos",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             pictures: {
    //               uri: "/users/188189201/pictures",
    //               options: ["GET", "POST"],
    //               total: 1,
    //             },
    //             watched_videos: {
    //               uri: "/me/watched/videos",
    //               options: ["GET"],
    //               total: 0,
    //             },
    //             folders_root: {
    //               uri: "/users/188189201/folders/root",
    //               options: ["GET"],
    //             },
    //             folders: {
    //               uri: "/users/188189201/folders",
    //               options: ["GET", "POST"],
    //               total: 1,
    //             },
    //             teams: {
    //               uri: "/users/188189201/teams",
    //               options: ["GET"],
    //               total: 1,
    //             },
    //             block: { uri: "/me/block", options: ["GET"], total: 0 },
    //           },
    //         },
    //         location_details: {
    //           formatted_address: "",
    //           latitude: null,
    //           longitude: null,
    //           city: null,
    //           state: null,
    //           neighborhood: null,
    //           sub_locality: null,
    //           state_iso_code: null,
    //           country: null,
    //           country_iso_code: null,
    //         },
    //         skills: [],
    //         available_for_hire: false,
    //         can_work_remotely: false,
    //         preferences: {
    //           videos: {
    //             rating: ["unrated"],
    //             privacy: {
    //               view: "anybody",
    //               comments: "anybody",
    //               embed: "public",
    //               download: true,
    //               add: true,
    //               allow_share_link: true,
    //             },
    //           },
    //           webinar_registrant_lower_watermark_banner_dismissed: [],
    //         },
    //         content_filter: [
    //           "language",
    //           "drugs",
    //           "violence",
    //           "nudity",
    //           "safe",
    //           "unrated",
    //         ],
    //         upload_quota: {
    //           space: {
    //             free: 1,
    //             max: 2,
    //             used: 1,
    //             showing: "periodic",
    //             unit: "video_count",
    //           },
    //           periodic: {
    //             period: "month",
    //             unit: "video_count",
    //             free: 1,
    //             max: 2,
    //             used: 1,
    //             reset_date: "2023-01-05T00:00:00-05:00",
    //           },
    //           lifetime: { unit: "video_count", free: 23, max: 25, used: 2 },
    //         },
    //         resource_key: "9f5732030f686afa85aad9b20e0e339f8cbd6b46",
    //         account: "free",
    //       },
    //       access_grant: null,
    //       metadata: {
    //         connections: {
    //           items: {
    //             uri: "/users/188189201/projects/13582138/items",
    //             options: ["GET"],
    //             total: 2,
    //           },
    //           videos: {
    //             uri: "/users/188189201/projects/13582138/videos",
    //             options: ["GET", "DELETE", "PUT"],
    //             total: 2,
    //           },
    //           folders: {
    //             uri: "/users/188189201/projects/13582138/items",
    //             options: ["GET", "DELETE", "PUT"],
    //             total: 0,
    //           },
    //           ancestor_path: [],
    //         },
    //         interactions: {
    //           edit: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["PATCH"],
    //           },
    //           move_video: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["PATCH"],
    //           },
    //           upload_video: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["POST"],
    //           },
    //           view: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["GET"],
    //           },
    //           edit_settings: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["PATCH"],
    //           },
    //           delete: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["DELETE"],
    //           },
    //           delete_video: {
    //             uri: "/users/188189201/projects/13582138",
    //             options: ["DELETE"],
    //           },
    //           add_subfolder: {
    //             uri: "/user/188189201/projects",
    //             options: ["POST"],
    //             can_add_subfolders: true,
    //             subfolder_depth_limit_reached: false,
    //             content_type: "application/vnd.vimeo.folder",
    //             properties: [
    //               { name: "name", required: false, value: "" },
    //               {
    //                 name: "parent_folder_uri",
    //                 required: true,
    //                 value: "/users/188189201/projects/13582138",
    //               },
    //             ],
    //           },
    //         },
    //       },
    //     },
    //     last_user_action_event_date: "2022-12-12T12:19:37+00:00",
    //     review_page: {
    //       active: true,
    //       link: "https://vimeo.com/user188189201/review/767582772/37d607af9c",
    //       is_shareable: true,
    //     },
    //     play: { status: "playable" },
    //     app: { name: "Parallel Uploader", uri: "/apps/87099" },
    //     status: "available",
    //     resource_key: "6e5dc50f50d701133fbc6c50e53a4d00c313bf0a",
    //     upload: {
    //       status: "complete",
    //       link: null,
    //       upload_link: null,
    //       complete_uri: null,
    //       form: null,
    //       approach: null,
    //       size: null,
    //       redirect_url: null,
    //     },
    //     transcode: { status: "complete" },
    //     is_playable: true,
    //     has_audio: true,
    //   },
    // ];
    // const res = data.map((el) => {
    //   console.log(el);
    //   return { id: el.player_embed_url, picture: Alexander_Lutchak };
    // });
    // setVid(res);
    axios
      .get("http://localhost:8080/video")
      .then((res) => {
        // const arr = [];
        const dataWithChangedDeskription = res.data.data.map((el) => {
          const koma = el.description && el.description.indexOf(",");
          const firstStr = el.description && el.description.slice(0, koma);
          const secondStr = el.description && el.description.slice(koma + 1);
          if (firstStr && secondStr) {
            return {
              ...el,
              description: {
                director: firstStr,
                directed: secondStr && secondStr.trim(),
              },
            };
          }
        });
        console.log(dataWithChangedDeskription);
      })
      .catch((error) => console.log(error));
  }, []);

  // let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        <button onClick={getVideo}>Get video</button>
        {vid && (
          <>
            <ul>
              {vid.map((it, inx) => {
                return (
                  <li key={inx} onClick={() => getVideo(it.id)}>
                    <Image
                      src={it.picture}
                      alt={it.picture}
                      width="300"
                      height={305}
                    ></Image>
                  </li>
                );
              })}
            </ul>
            {video && (
              <ReactPlayer
                url={video}
                className={s.worksVideoQwe}
                config={{
                  vimeo: {
                    playerOptions: {
                      playsinline: true,
                      width: 200,
                    },
                  },
                }}
              />
            )}

            {/* <ReactPlayer
              url="https://player.vimeo.com/video/767582772"
              className={s.worksVideoQwe}
              config={{
                vimeo: {
                  playerOptions: {
                    playsinline: true,
                    width: 200,
                  },
                },
              }}
            /> */}
          </>
        )}
      </section>
    </>
  );
}
export default Works_en;
// <iframe
// style={{
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
// }}
//   frameBorder="0"
//   playsInline
//   allowFullScreen
//   controls={false}
//   autoPlay
//   loop
//   muted="false"
//   src={vid.src}
//   type="video/mp4"
// ></iframe>
// )}
// const qwe = new DOMParser()
//   .parseFromString(res.data.html, "text/html")
//   .getElementsByTagName("iframe")[0];
// console.log(qwe);
// // router.push(res.data.player_embed_url);

// https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/75e49e80-9f84-49be-a0a0-9d997e1322d1.gif?ClientID=vimeo-core-prod&Date=1670853878&Signature=8529fe90a66476e451c1afa58f7832872fdeef00
