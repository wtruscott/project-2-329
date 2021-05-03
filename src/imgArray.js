const images = [
    {
    alt: "pyramid",

    url: "https://www.exploringourglobe.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTcwNDI1MzU0MDM1NDA2NTI2/f685n0.jpg"
    },
    {
    alt: "Victoria Falls",
    
    url: "https://media.npr.org/assets/img/2018/01/17/gettyimages-553198031-50_custom-f301526a5189d0e61574586d29e9fc1d652b745f.jpg"
    },
    {
    alt: "Kilimanjaro Giraffes",
    
    url: "https://www.pandotrip.com/wp-content/uploads/2018/07/Giraffes-with-Mount-Kilimanjaro-in-the-background.-Kilimanjaro-National-Park-Tanzania.jpg"
    },
    {
    alt: "Cape Town",
    
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=1000&h=600&s=1"
    },
    {
    alt: "Tokyo",
    
    url: "https://d1ix9yerv4y8lr.cloudfront.net/blog/wp-content/uploads/2019/07/tokyo-ops-7-19.jpg"
    },
    {
    alt: "Istanbul",
    
    url: "https://www.advertisingweek360.com/wp-content/uploads/2019/05/169istanbul-1170x600.jpg"
    },
    {
    alt: "Angkor Wat",
    
    url: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/og-for-Angkor-Wat-In-Cambodia.jpg"
    },
    {
    alt: "Dubai Desert",
    
    url: "https://cdn2.veltra.com/ptr/20200102053224_823338737_10502_0.jpg?imwidth=550&impolicy=custom"
    },
    {
    alt: "Great Wall",
    
    url: "https://www.visahq.com/images/visa_info/china-visa-application-requirements.jpg"
    },
    {
    alt: "Venice",
    
    url: "https://cdn1.matadornetwork.com/blogs/1/2011/05/italy-1200x815.jpg"
    },
    {
    alt: "Scottish Castle",
    
    url: "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Scotland-Loch-Awe-Kilchurn-Castle-513939127-1440x823.jpg"
    },
    {
    alt: "Croatia",
    
    url: "https://www.gannett-cdn.com/presto/2019/12/18/USAT/566d2c9a-6fe3-4fe9-b460-137090015158-Croatia_-_Dubrovnik.jpg"
    },
    {
    alt: "Versailles",
    
    url: "https://images.musement.com/cover/0002/15/venuehero-versailles1-jpg_header-114728.jpeg?q=50&fit=crop&auto=format&w=1024&h=400"
    },
    {
    alt: "Sydney",
    
    url: "https://www.applelanguages.com/en/img/top/sydney.jpg"
    },
    {
    alt: "New Zealand",
    
    url: "https://thecommonwealth.org/sites/default/files/styles/press_release_large/public/images/hero/aoraki-new-zealand%20-%20article.jpg?itok=H8zb-aTP"
    },
    {
    alt: "Barrier Reef",
    
    url: "https://lh3.googleusercontent.com/proxy/-f4D0ds8-JGTdsmL6CIf5qBLPe_RCFkxgk6u5_HA1b21H6zutiZGXBdoM8p0P1U1zoJcAOBFlaOpmbaEmLmhk-J4UrtkQRYwShe48EgsnP7EBwFgOhd5dsCof4NIasJ7J9dw6Ky9KAoWHT4U-R2MGlaTx9MYS0BHg8piCzPLo4hqMgUpCSVk9WEUYTnf1LwbnIbuy9vgqlu7Jhzk"
    },
    {
    alt: "Rock",
    
    url: "https://www.tripsavvy.com/thmb/0sw-_E8e9aufz8Bag4-D-gKwWU8=/2252x1331/GettyImages-693631434-5b3a3e3dc9e77c001ad2fed8.jpg"
    },
    {
    alt: "Fiji",
    
    url: "https://lp-cms-production.imgix.net/2019-06/109845555%20.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312"
    },
    {
    alt: "Patagonia",
    
    url: "https://static.onecms.io/wp-content/uploads/sites/28/2018/08/perito-moreno-glacier-patagonia-ALJHPATAGONIA0718.jpg",
    },
    {
    alt: "Brazil",
    
    url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1145D/production/_110794707_gettyimages-590664365.jpg"
    },
    {
    alt: "Machu Pichu",
    
    url: "https://www.conserve-energy-future.com/wp-content/uploads/2018/11/machu-picchu-ruins-mountains-peru.jpg"
    },
    {
    alt: "Costa Rican Rainforest",
    
    url: "https://www.volunteeringsolutions.com/asset/uploads/img/page_header_image/costa_rica/san_jose/651/651_costarica.jpg"
    },
    {
    alt: "Grand Canyon",
    
    url: "https://www.smartertravel.com/wp-content/uploads/2017/08/grand-canyon-sunset-1200x627.jpg"
    },
    {
    alt: "Times Square",
    
    url: "https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,h_1200,w_1200/v1574859574/zj1vebu2d6xxjcrswjre.jpg"
    },
    {
    alt: "Greenland",
    
    url: "https://ei.marketwatch.com/Multimedia/2019/08/16/Photos/ZQ/MW-HP642_greenl_20190816171926_ZQ.jpg?uuid=86919c70-c06b-11e9-9056-9c8e992d421e"
    },
    {
    alt: "Yukon",
    
    url: "https://www.thehotelguru.com/_images/18/3d/183d86047c04ba092ecb8997ecb4efb1/yukon-s1180x560.jpg"
    },
    {
    alt: "Mexico",
    
    url: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2018-01/mexico-romantic.jpg"
    }
]

export default images