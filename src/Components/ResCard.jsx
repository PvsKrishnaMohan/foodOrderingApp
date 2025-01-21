import React from "react";
import {CLOUDINARY_URL} from '../Utils/Constants'
// const resData = {
//   card: {
//     card: {
//       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//       info: {
//         id: "328912",
//         name: "No Sugar, Please! -Juices, Salads & Fruit Bowls",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/3dd0ac12-b252-48a0-8356-b024baa1e482_328912.jpg",
//         locality: "SG Palya",
//         areaName: "Tavarekere",
//         costForTwo: "₹200 for two",
//         cuisines: ["Healthy Food", "Juices", "Salads"],
//         avgRating: 4.6,
//         veg: true,
//         parentId: "11564",
//         avgRatingString: "4.6",
//         totalRatingsString: "4.3K+",
//         promoted: true,
//         adTrackingId:
//           "cid=23461250~p=2~adgrpid=23461250#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=328912~eid=a2c7f0db-5fa1-47dd-ab21-7609e45d098e~srvts=1736648374603~collid=80395",
//         sla: {
//           deliveryTime: 33,
//           lastMileTravel: 3,
//           serviceability: "SERVICEABLE",
//           slaString: "30-35 mins",
//           lastMileTravelString: "3.0 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2025-01-12 23:00:00",
//           opened: true,
//         },
//         badges: {
//           textExtendedBadges: [
//             {
//               iconId: "guiltfree/GF_Logo_android_3x",
//               shortDescription: "brand",
//               fontColor: "#7E808C",
//             },
//           ],
//         },
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             textBased: {},
//             imageBased: {},
//             textExtendedBadges: {
//               badgeObject: [
//                 {
//                   attributes: {
//                     description: "",
//                     shortDescription: "brand",
//                     fontColor: "#7E808C",
//                     iconId: "guiltfree/GF_Logo_android_3x",
//                   },
//                 },
//               ],
//             },
//           },
//         },
//         aggregatedDiscountInfoV3: {
//           header: "ITEMS",
//           subHeader: "AT ₹49",
//           logoCtx: {
//             text: "BENEFITS",
//           },
//         },
//         loyaltyDiscoverPresentationInfo: {
//           logoCtx: {
//             logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
//           },
//           freedelMessage: "FREE DELIVERY",
//           badgeType: "BADGE_TYPE_ONE_LITE",
//         },
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//           commsStyling: {},
//         },
//         differentiatedUi: {
//           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           differentiatedUiMediaDetails: {
//             mediaType: "ADS_MEDIA_ENUM_IMAGE",
//             lottie: {},
//             video: {},
//           },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//         externalRatings: {
//           aggregatedRating: {
//             rating: "--",
//           },
//         },
//         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         campaignId: "23461250",
//       },
//       analytics: {},
//       cta: {
//         link: "swiggy://menu?restaurant_id=328912&source=collection&query=Salad",
//         text: "RESTAURANT_MENU",
//         type: "DEEPLINK",
//       },
//       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
//     },
//     relevance: {
//       type: "RELEVANCE_TYPE_ON_MENU_RETURN",
//       sectionId: "MENU_RETURN_FOOD",
//     },
//   },
// };

const ResCard = (props) => {
  const { resData } = props;
//   console.log(resData,"rd")
  const {name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId} = resData
  return (
    <div className="w-[250px] p-5 bg-slate-200 rounded-lg m-3 hover:bg-yellow-50">
      <img
        className="rounded-lg mb-3"
        src={CLOUDINARY_URL+cloudinaryImageId}
      />
      <div className="flex justify-between my-1">
      <h4 className="font-bold ">{name}</h4>
      <h6 className="bg-orange-100 p-1 rounder-xl">{costForTwo}</h6>
      </div>
      <h6 className="">{cuisines.join(", ")}</h6>
      <div className="flex justify-between my-1">
      <h6 className="bg-yellow-100 p-1 rounded-lg">{avgRating} stars</h6>
      <h6 className="bg-lime-200 rounded-lg p-1">{sla.slaString}</h6>
      </div>
    </div>
  );
};

export default ResCard;


