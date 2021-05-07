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
    alt: "Ampitheatre Valley",

    url: "https://media.cntraveler.com/photos/58f8fff1aae67d6f485215dc/master/w_2048,h_1536,c_limit/amphitheatre-valley-drakensberg-south-africa-Alamy-HFA4ND.jpg"
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
    
    url: "https://www.snopes.com/tachyon/2018/07/great_wall_of_china.jpg?resize=865,452&crop_strategy=smart"
    },
    {
    alt: "Taj Mahal",

    url:"https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg"
    },
    {
    alt: "Jeruselum",

    url: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/jerusalem-ashdod-israel/overview/jerusalem-israel-tower-of-david.jpg?$1024x700$"
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
    alt: "Eiffel",
    
    url: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg"
    },
    {
    alt: "Sydney",
    
    url: "http://cdn.cnn.com/cnnnext/dam/assets/170905162130-sydney-opera-house.jpg"
    },
    {
    alt: "New Zealand",
    
    url: "https://www.newzealand.com/assets/Tourism-NZ/Fiordland/img-1536137761-110-7749-p-7ECF7092-95BD-FE18-6D4107E2E42D067E-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg"
    },
    {
    alt: "Barrier Reef",
    
    url: "https://media.cntraveler.com/photos/5718f78980cf3e034f974595/16:9/w_2560%2Cc_limit/GettyImages-150968209.jpg"
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
    
    url: "https://www.visaplace.com/wp-content/uploads/2020/01/fixedw_large_4x.jpg"
    },
    {
    alt: "Mexico",
    
    url: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2018-01/mexico-romantic.jpg"
    }
]

export default images