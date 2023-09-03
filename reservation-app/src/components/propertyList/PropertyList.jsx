import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://media.discordapp.net/attachments/1074086498850320384/1147231874331181156/arielnlm_eco_friendly_hotel_room_ui_ux_ui_ux_website_pastel_col_89fc6aa9-6cf7-4bd9-b7c4-b36a1cf2d924.png?width=1194&height=1194",
    "https://media.discordapp.net/attachments/1074086498850320384/1147233496000114768/arielnlm_simple_kids_treehouses_in_the_woods_ui_ux_ui_ux_websit_bcbafdeb-1127-4158-9756-5b6f04bf07a8.png?width=1194&height=1194",
    "https://media.discordapp.net/attachments/1074086498850320384/1147233605756670055/arielnlm_yurts_ui_ux_ui_ux_website_pastel_colors_085c90ba-c95f-4da2-9872-29d1f3c28bb1.png?width=1194&height=1194",
    "https://media.discordapp.net/attachments/1074086498850320384/1147234317345509616/arielnlm_underwater_hotel_room_ui_ux_ui_ux_website_pastel_color_5461c917-41ad-4f49-a44b-fef3a4e6ad2f.png?width=1194&height=1194",
    "https://media.discordapp.net/attachments/1074086498850320384/1147238612895801375/arielnlm_eco_friendly_cabin_in_the_woord_near_lake_ui_ux_ui_ux__82ac5760-efc6-4cab-9c0f-7ff1f2b5285d.png?width=1194&height=1194",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;