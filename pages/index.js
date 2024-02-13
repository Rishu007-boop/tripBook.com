import BgComponent from "../components/backgroundImg/bgComponent";
import { Slideshow } from "../components/explore/slideShow";
import SearchBox from "../components/searchBox/searchBox";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Nextrip } from "../components/explore/nextTrip";
import ConnectWithtravellers from "../components/explore/connectTravellers";
import Navbar from "../components/navbarSection/navbar";
function Stay() {
  // { slideImages, slide, travel, stay }
  // console.log(travel);
  const slideImages = [
    {
      url: "https://i.pinimg.com/564x/07/73/03/0773039c1651e89004d7c83820d7918f.jpg",
      caption: "New York",
      property: "5,242 properties",
    },
    {
      url: "https://i.pinimg.com/564x/12/33/0f/12330f74df8ea261d295172927d33832.jpg",
      caption: "Seattle",
      property: "1,652 properties",
    },
    {
      url: "https://i.pinimg.com/564x/af/3f/c5/af3fc5737cddbdb06603bf9243a408c0.jpg",
      caption: "Florida",
      property: "2,912 properties",
    },
    {
      url: "https://i.pinimg.com/564x/18/77/cc/1877cce2582fb523c02e0e50927204fa.jpg",
      caption: "Las Vegas",
      property: "751 properties",
    },
    {
      url: "https://i.pinimg.com/564x/a4/b3/10/a4b310111f69c7fd6cf52e448d9605de.jpg",
      caption: "Los Angeles",
      property: "2,039 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
      caption: "Arizona",
      property: "1,558 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
      caption: "Dallas",
      property: "651 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
      caption: "Austin",
      property: "816 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=",
      caption: "North Carolina",
      property: "3,903 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684919.webp?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",
      caption: "San Francisco",
      property: "470 properties",
    },
  ];

  const slide = [
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",

      caption: "Hotels",
      property: "892,472 hotels",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
      caption: "Apartments",
      property: "926,012 apartments",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
      caption: "Resorts",
      property: "18,252 resorts",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
      caption: "Villas",
      property: "482,715 villas",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
      caption: "Cottages",
      property: "158,612 cottages",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
      caption: "Glamping",
      property: "14,004 glamping sites",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
      caption: "Serviced apartments",
      property: "35,899 serviced apartments",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
      caption: "Holiday homes",
      property: "482,715 holiday homes",
    },
  ];

  const travel = [
    {
      caption: "Genuius",
      property: "mandloi, you're at Genius Level 1 in our loyalty programme",
      url: "https://i.pinimg.com/564x/a5/14/1a/a5141af8e3f910652b4067147a81d4a4.jpg",
    },
    {
      caption: "10% discounts",
      property: "Enjoy discounts at participating properties worldwide",
      url: "https://i.pinimg.com/564x/32/b4/e1/32b4e1726924c26ceaba6ae906cfcdd2.jpg",
    },
    {
      caption: "15% discounts",
      property: "Complete 5 stays to unlock Genius Level-2 limited time offer",
      url: "https://i.pinimg.com/564x/70/f3/9f/70f39f9c1d5a87c55a917f3de26f89a7.jpg",
    },
    {
      caption: "Free breakfasts",
      property: "Complete 5 stays to unlock Genius Level 2 limited time offer",
      url: "https://i.pinimg.com/564x/a0/b6/c7/a0b6c76ba1238090839bcb065ea6cecf.jpg",
    },
    {
      caption: "Free room upgrades",
      property: "Complete 5 stays to unlock Genius Level 2 limited time offer",
      url: "https://i.pinimg.com/564x/2c/60/a1/2c60a17f15bffde93a5d8580a70e1620.jpg",
    },
  ];

  const stay = [
    {
      caption: "Genuius",
      property: "mandloi, you're at Genius Level 1 in our loyalty programme",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
    },
    {
      caption: "10% discounts",
      property: "Enjoy discounts at participating properties worldwide",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1",
    },
    {
      caption: "15% discounts",
      property: "Complete 5 stays to unlock Genius Level 2 limited time offer",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1",
    },
    {
      caption: "Free breakfasts",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1",
    },
    {
      caption: "Free room upgrades",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=262301cdcbef1d33942bb02607906eafdee8dde3106ac5732966a206baeebb04&o=&s=1",
    },
  ];

  return (


    <>
    <Navbar/>  
    
      <BgComponent
        heading="The joy of home anywhere in the world"
        subHeading="Easy booking, easy living"
      />
      <SearchBox />
      <Box
        display={"flex"}
        width={"88%"}
        height={"auto"}
        margin={"auto"}
        marginTop={"30px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Image
          //   width={"15%"}
          width={{
            base: "45%",
            sm: "40%",
            md: "25%",
            lg: "20%",
            xl: "20%",
            "2xl": "30%",
          }}
          height={"150px"}
          src={
            "https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
          }
        />
        <Box textAlign={"start"} marginLeft={"10px"} marginTop={"20px"}>
          <Text
            fontWeight={"bold"}
            fontSize={{
              base: "10px",
              sm: "14px",
              md: "19px",
              lg: "20px",
              xl: "21px",
              "2xl": "22px",
            }}
          >
            Save 15% or more{" "}
          </Text>
          <Text
            fontSize={{
              base: "10px",
              sm: "14px",
              md: "19px",
              lg: "20px",
              xl: "21px",
              "2xl": "22px",
            }}
          >
            This summer, make your dream trip a reality. Book and stay for less
            before 30 Sep 2022
          </Text>
          <Button
            width={{
              base: "45%",
              sm: "40%",
              md: "25%",
              lg: "20%",
              xl: "20%",
              "2xl": "30%",
            }}
            fontSize={{
              base: "9px",
              sm: "10px",
              md: "15px",
              lg: "15px",
              xl: "20px",
              "2xl": "20px",
            }}
            marginTop={"10px"}
            marginBottom={"10px"}
            colorScheme="blue"
          >
            Explore deals
          </Button>
        </Box>
      </Box>
      <br />
      {/* Explore India Slider */}

      <Slideshow
        image={slideImages}
        no={6}
        tag="Explore India"
        subTag="These popular destinations have a lot to offer"
      />

      {/* grid section  */}
      <br />
      <Box width={"88%"} margin={"auto"} marginTop={"20px"}>
        <Box
          height={"260px"}
          width={"100%"}
          display={"flex"}
          // justifyContent="space-evenly"
          marginBottom={"10px"}
          // border="4px solid red"
          gap="7px"
        >
          <Box
            display={"flex"}
            // width={"55%"}
            width={"50%"}
            height={"auto"}
            // border="2px solid black"
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"120px"}
                color={"white"}
                fontSize={["12px", "15px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                New York
              </Text>
            </Box>
          </Box>

          <Box
            //  border="2px solid black"
            width={"50%"}
            height={"100%"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_640/MTg3MjQ4OTU3ODI5Njg3MTgy/las-vegas.jpg)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid pink"
            >
              {" "}
              <Text
                marginLeft={"110px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Las Vegas
              </Text>
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} display={"flex"} gap="10px">
          <Box
            display={"flex"}
            width={"33%"}
            height={"260px"}
            background-position={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://a-z-animals.com/media/2023/06/shutterstock-1887700108-huge-licensed-scaled-1024x588.jpg)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Los Angeles
              </Text>
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://i.pinimg.com/564x/b8/56/9a/b8569a6338f529430c6d0130100bfdaa.jpg)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              // border="2px solid green"
              marginTop={"10px"}
            >
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Seattle
              </Text>
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://i.pinimg.com/564x/14/85/7f/14857f89ac0b73330745414bb7b673df.jpg)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Florida
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      {/*Browse by property type section*/}

      <Slideshow image={slide} no={4} tag="Browse by property type" subTag="" />

      <br />
      <Slideshow
        image={travel}
        no={4}
        tag="Travel around USA"
        subTag="Explore more places we think you'll love"
        height={"400px"}
        width={"320px"}

      />
      <br />
      {/* Stay at our top unique properties */}

      <Slideshow
        image={stay}
        no={4}
        tag="Stay at our top unique properties"
        subTag="From castles and villas to boats and igloos, we've got it all"
      />
      <br />
      <Nextrip />
      <br />
      <br />

      <Box width={"88%"} margin="auto">
        <Text
          fontWeight={"bold"}
          fontSize={{
            base: "10px",
            sm: "14px",
            md: "19px",
            lg: "20px",
            xl: "21px",
            "2xl": "22px",
          }}
        >
          Connect with other travelers
        </Text>
        <br />
        <ConnectWithtravellers />
      </Box>
    </>
  );
}

export default Stay;

//we can use this if we want to use data from deployed server

// export const getStaticProps = async () => {
//   const res1 = await fetch(
//     "https://web-database-pravin.onrender.com/slideImages"
//   );

//   const dataSlideImage = await res1.json();

//   const res2 = await fetch("https://web-database-pravin.onrender.com/slide");

//   const dataSlide = await res2.json();

//   const res3 = await fetch("https://web-database-pravin.onrender.com/travel");

//   const dataTravel = await res3.json();

//   const res4 = await fetch("https://web-database-pravin.onrender.com/stay");

//   const dataStay = await res4.json();

//   return {
//     props: {
//       slideImages: dataSlideImage,
//       slide: dataSlide,
//       travel: dataTravel,
//       stay: dataStay,
//     },
//   };
// };
