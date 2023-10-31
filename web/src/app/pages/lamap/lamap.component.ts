import { Component, OnInit } from '@angular/core';
import { LAParcelService } from 'src/app/@core/api/laparcel.service';
import * as L from 'leaflet'
interface LAProperty {
  ain: string;
  type: string;
}
@Component({
  selector: 'app-lamap',
  templateUrl: './lamap.component.html',
  styleUrls: ['./lamap.component.scss']
})
export class LamapComponent implements OnInit {
  /*
  private data:LAProperty[] = [
    {
      "ain": "2006-011-010",
      "type": "VACANT LOT"
    },
    {
      "ain": "2007-007-019",
      "type": "23248 COUNTY LINE RD CHATSWORTH CA 91311-7003"
    },
    {
      "ain": "2007-007-020",
      "type": "VACANT LOT"
    },
    {
      "ain": "2007-008-001",
      "type": "VACANT LOT"
    },
    {
      "ain": "2007-008-002",
      "type": "VACANT LOT"
    },
    {
      "ain": "2007-008-003",
      "type": "VACANT LOT"
    },
    {
      "ain": "2054-020-048",
      "type": "30423 CANWOOD ST AGOURA HILLS CA 91301-2082"
    },
    {
      "ain": "2054-020-053",
      "type": "30423 CANWOOD ST AGOURA HILLS CA 91301-2082"
    },
    {
      "ain": "2054-020-056",
      "type": "30423 CANWOOD ST AGOURA HILLS CA 91301-2082"
    },
    {
      "ain": "2054-020-069",
      "type": "30423 CANWOOD ST AGOURA HILLS CA 91301-2082"
    },
    {
      "ain": "2054-020-074",
      "type": "30423 CANWOOD ST NO 111 AGOURA HILLS CA 91301-4313"
    },]
    */

  private data: LAProperty[] =
    
  [
    {
        "ain": "2175009017",
        "type": "VACANT LOT"
    },
    {
        "ain": "2401035005",
        "type": "VACANT LOT"
    },
    {
        "ain": "2409002026",
        "type": "10925 RATNER ST"
    },
    {
        "ain": "2531010034",
        "type": "VACANT LOT"
    },
    {
        "ain": "2569005055",
        "type": "VACANT LOT"
    },
    {
        "ain": "2569014024",
        "type": "VACANT LOT"
    },
    {
        "ain": "2569014026",
        "type": "VACANT LOT"
    },
    {
        "ain": "2569014027",
        "type": "VACANT LOT"
    },
    {
        "ain": "2569014033",
        "type": "VACANT LOT"
    },
    {
        "ain": "2581010022",
        "type": "17836 LITTLE TUJUNGA CANYON RD"
    },
    {
        "ain": "2601025028",
        "type": "VACANT LOT"
    },
    {
        "ain": "2606017054",
        "type": "17151 BARNESTON ST"
    },
    {
        "ain": "2627022008",
        "type": "13171 TONOPAH ST"
    },
    {
        "ain": "2802019024",
        "type": "27757 WALNUT SPRINGS AVE"
    },
    {
        "ain": "2813023024",
        "type": "VACANT LOT"
    },
    {
        "ain": "2818007023",
        "type": "VACANT LOT"
    },
    {
        "ain": "2821015001",
        "type": "VACANT LOT"
    },
    {
        "ain": "2821017070",
        "type": "VACANT LOT"
    },
    {
        "ain": "2826015015",
        "type": "VACANT LOT"
    },
    {
        "ain": "2826018039",
        "type": "VACANT LOT"
    },
    {
        "ain": "2826041022",
        "type": "VACANT LOT"
    },
    {
        "ain": "2829025046",
        "type": "VACANT LOT"
    },
    {
        "ain": "2833025027",
        "type": "VACANT LOT"
    },
    {
        "ain": "2846015026",
        "type": "VACANT LOT"
    },
    {
        "ain": "2865004006",
        "type": "VACANT LOT"
    },
    {
        "ain": "2865004008",
        "type": "VACANT LOT"
    },
    {
        "ain": "3012011088",
        "type": "VAC/AVE R7/VIC PALM VISTA AVE"
    },
    {
        "ain": "3014031051",
        "type": "1700 E AVENUE Q14 NO 9"
    },
    {
        "ain": "3015006045",
        "type": "VAC/COR AVE Q4/12TH STE"
    },
    {
        "ain": "3021004026",
        "type": "38633 LEMSFORD AVE"
    },
    {
        "ain": "3027001047",
        "type": "10205 E PALMDALE BLVD"
    },
    {
        "ain": "3027013027",
        "type": "VAC/PALMDALE BL(PAV)/AVE R"
    },
    {
        "ain": "3027017019",
        "type": "38146 90TH ST E"
    },
    {
        "ain": "3027017020",
        "type": "9012 E AVENUE Q12"
    },
    {
        "ain": "3027027040",
        "type": "VAC/90TH STE/VIC PALMDALE BLVD"
    },
    {
        "ain": "3029008003",
        "type": "VAC/VIC 150 STE/AVE P4"
    },
    {
        "ain": "3029028033",
        "type": "VAC/AVE Q/VIC 148 STE"
    },
    {
        "ain": "3030001030",
        "type": "18039 E AVENUE R"
    },
    {
        "ain": "3030004163",
        "type": "VAC/VIC AVE R4/193 STE"
    },
    {
        "ain": "3030005060",
        "type": "VAC/VIC AVE R4/197 STE"
    },
    {
        "ain": "3030012064",
        "type": "VAC/VIC 185 STE/AVE P8"
    },
    {
        "ain": "3030021005",
        "type": "VAC/PALMDALE BL/VIC 190TH STE"
    },
    {
        "ain": "3030027030",
        "type": "VAC/CARMER ST(P12E)/VIC 196 STE"
    },
    {
        "ain": "3032003026",
        "type": "VAC/VIC AVE S8/254 STE"
    },
    {
        "ain": "3032011038",
        "type": "VAC/AVE U/VIC 253 STE"
    },
    {
        "ain": "3032014033",
        "type": "VAC/AVE S/VIC 240 STE"
    },
    {
        "ain": "3032017048",
        "type": "VAC/VIC 242 STE/AVE S10"
    },
    {
        "ain": "3032017059",
        "type": "VAC/VIC 248 STE/AVE S12"
    },
    {
        "ain": "3033006142",
        "type": "VAC/VIC AVE S4/219 STE"
    },
    {
        "ain": "3033007091",
        "type": "VAC/VIC 208 STE/AVE T12"
    },
    {
        "ain": "3033007112",
        "type": "VAC/VIC AVE T8/210 STE"
    },
    {
        "ain": "3033019002",
        "type": "VAC/VIC AVE W4/207 STE"
    },
    {
        "ain": "3036001026",
        "type": "VAC/VIC AVE W4/146 STE"
    },
    {
        "ain": "3036003022",
        "type": "VAC/VIC AVE W8/146 STE"
    },
    {
        "ain": "3036012015",
        "type": "VAC/VIC AVE V2/170 STE"
    },
    {
        "ain": "3036012016",
        "type": "VAC/VIC AVE V2/170 STE"
    },
    {
        "ain": "3037002037",
        "type": "VAC/136 STE/VIC AVE V4"
    },
    {
        "ain": "3037010021",
        "type": "VAC/132 STE/VIC AVE V13"
    },
    {
        "ain": "3037025006",
        "type": "13113 E AVENUE W11"
    },
    {
        "ain": "3038030042",
        "type": "33553 N LONGVIEW RD"
    },
    {
        "ain": "3039005032",
        "type": "VAC/133RD STE(NOG)VIC AVE S2"
    },
    {
        "ain": "3039005035",
        "type": "VAC/COR AVE S4(NOG)/133RD STE(NO"
    },
    {
        "ain": "3039025002",
        "type": "VAC/AVE U8(DRT)/VIC 136 STE"
    },
    {
        "ain": "3039028043",
        "type": "VAC/EWEN AVE(DRT)/VIC 121 STE"
    },
    {
        "ain": "3040003034",
        "type": "VAC/AVE R12/VIC 132ND STE"
    },
    {
        "ain": "3040004005",
        "type": "VAC/AVE R12/VIC 132ND STE"
    },
    {
        "ain": "3040004015",
        "type": "VAC/AVE R14/VIC LONGVIEW RD"
    },
    {
        "ain": "3040004018",
        "type": "VAC/AVE R14/VIC 132ND STE"
    },
    {
        "ain": "3040005047",
        "type": "VAC/AVE R14/VIC 132ND STE"
    },
    {
        "ain": "3040008015",
        "type": "VAC/AVE R2/VIC LONGVIEW RD"
    },
    {
        "ain": "3040014029",
        "type": "VAC/AVE R12/VIC 140TH STE"
    },
    {
        "ain": "3040019008",
        "type": "VAC/AVE R10/VIC 142ND STE"
    },
    {
        "ain": "3040020004",
        "type": "VAC/AVE R12/VIC 142ND STE"
    },
    {
        "ain": "3040020015",
        "type": "VAC/AVE R14/VIC 140TH STE"
    },
    {
        "ain": "3040022024",
        "type": "VAC/AVE R12/VIC 145TH STE"
    },
    {
        "ain": "3040023025",
        "type": "VAC/AVE R6/VIC 145TH STE"
    },
    {
        "ain": "3040027034",
        "type": "VAC/AVE R12/VIC 145TH STE"
    },
    {
        "ain": "3040029028",
        "type": "VAC/COR AVE R14/147TH STE"
    },
    {
        "ain": "3040031024",
        "type": "VAC/AVE R6/VIC 150TH STE"
    },
    {
        "ain": "3041012009",
        "type": "VAC/AVE R(DRT)/VIC 107TH STE"
    },
    {
        "ain": "3041013038",
        "type": "VAC/AVE R4(DRT)/VIC 108TH STE"
    },
    {
        "ain": "3041014040",
        "type": "VAC/COR AVE R8(DRT)/107TH STE(DR"
    },
    {
        "ain": "3041029015",
        "type": "VAC/(DRT)AVE S/VIC 120TH E"
    },
    {
        "ain": "3046035026",
        "type": "VACANT LOT"
    },
    {
        "ain": "3047007071",
        "type": "VAC/VIC AVE V12/107TH STE"
    },
    {
        "ain": "3047009033",
        "type": "VAC/VIC 105TH STE/AVE V10 WASH"
    },
    {
        "ain": "3048015035",
        "type": "VAC/CHESEBORO(PAV)/VIC MT EMMA"
    },
    {
        "ain": "3048016017",
        "type": "VAC/MT EMMA(PAV)/VIC CHESEBORO"
    },
    {
        "ain": "3048020028",
        "type": "VAC/VIC 82ND ST/BARREL SPRINGS"
    },
    {
        "ain": "3048026041",
        "type": "VAC/VIC 81ST STE/MT EMMA"
    },
    {
        "ain": "3049003012",
        "type": "36235 82ND ST E"
    },
    {
        "ain": "3049009006",
        "type": "8530 E AVENUE T8"
    },
    {
        "ain": "3050029038",
        "type": "VAC/OLD FORT TEJON/AVE U2"
    },
    {
        "ain": "3053022036",
        "type": "VAC/VIC CA AQUEDUCT/PEARBLOSSOM"
    },
    {
        "ain": "3053042490",
        "type": "37159 28TH ST E"
    },
    {
        "ain": "3054026010",
        "type": "VAC/VIC REBEL RD/PEACEFUL VLY RD"
    },
    {
        "ain": "3056014024",
        "type": "VAC/CARSON MESA RD/VIC ANGELES F"
    },
    {
        "ain": "3057005060",
        "type": "VAC/VIC PEACEFUL VALLEY RD/HAXBY"
    },
    {
        "ain": "3057011036",
        "type": "VAC/SAN GABRIEL AVE/VIC HOADLEY"
    },
    {
        "ain": "3059008072",
        "type": "VAC/VIC FORT TEJON/106 STE"
    },
    {
        "ain": "3060008010",
        "type": "13138 FORT TEJON RD"
    },
    {
        "ain": "3060011028",
        "type": "VAC/VIC AVE Y8/123 STE"
    },
    {
        "ain": "3060022041",
        "type": "VAC/HONEYBEE LN/VIC 118 STE"
    },
    {
        "ain": "3061012034",
        "type": "VAC/VIC 150 STE/PALMDALE VALYERM"
    },
    {
        "ain": "3062003020",
        "type": "VAC/COR AVE Y/192 STE"
    },
    {
        "ain": "3062005068",
        "type": "VAC/VIC 180 STE/AVE Y8"
    },
    {
        "ain": "3062012003",
        "type": "VAC/VIC CAMINO RD/205 STE"
    },
    {
        "ain": "3062015005",
        "type": "VAC/VIC AVE Z/200 STE"
    },
    {
        "ain": "3062016023",
        "type": "VAC/VIC AVE Z/LARGO VISTA"
    },
    {
        "ain": "3062017013",
        "type": "VAC/VIC LARGO VISTA/AVE Z"
    },
    {
        "ain": "3062023001",
        "type": "VAC/VIC 200 STE/CAMINO VALYERMO"
    },
    {
        "ain": "3062024008",
        "type": "VAC/VIC 200 STE/HOLCOMB RDG"
    },
    {
        "ain": "3062024009",
        "type": "VAC/VIC 200 STE/HOLCOMB RDG"
    },
    {
        "ain": "3062026012",
        "type": "VAC/VIC 197 STE/CAMINO RD"
    },
    {
        "ain": "3062030013",
        "type": "VAC/VIC 202 STE/CAMINO RD"
    },
    {
        "ain": "3062030016",
        "type": "VAC/VIC 202 STE/CAMINO RD"
    },
    {
        "ain": "3062032007",
        "type": "VAC/VIC 203 STE/AVENIDA AMADO"
    },
    {
        "ain": "3062032012",
        "type": "VAC/VIC 203 STE/AVENIDA AMADO"
    },
    {
        "ain": "3062034002",
        "type": "VAC/VIC 203 STE/AVENIDA EDUARDO"
    },
    {
        "ain": "3063005086",
        "type": "VAC/LARGO VIS/2 MIN BG PINE"
    },
    {
        "ain": "3064003015",
        "type": "31620 FORT TEJON RD"
    },
    {
        "ain": "3064014041",
        "type": "VAC/VIC AVE Z14/260 STE"
    },
    {
        "ain": "3064015010",
        "type": "VAC/VIC AVE Z14/250 STE"
    },
    {
        "ain": "3064015019",
        "type": "30600 248TH ST E"
    },
    {
        "ain": "3064017037",
        "type": "VAC/VIC AVE Z14/204 STE"
    },
    {
        "ain": "3069008019",
        "type": "40545 154TH ST E"
    },
    {
        "ain": "3069010016",
        "type": "VAC/NEWMONT AVE/VIC 152ND STE"
    },
    {
        "ain": "3070008016",
        "type": "VACANT LOT"
    },
    {
        "ain": "3073018009",
        "type": "VACANT LOT"
    },
    {
        "ain": "3074012002",
        "type": "VACANT LOT"
    },
    {
        "ain": "3075021007",
        "type": "VAC/152 STE/VIC AVE R7"
    },
    {
        "ain": "3076010017",
        "type": "VAC/COR AVE N8/192 STE"
    },
    {
        "ain": "3076013021",
        "type": "VAC/VIC 200 STE/AVE O6"
    },
    {
        "ain": "3076018014",
        "type": "VAC/VIC AVE 014/200 STE"
    },
    {
        "ain": "3076018016",
        "type": "VAC/VIC AVE 012/200 STE"
    },
    {
        "ain": "3076018034",
        "type": "VAC/VIC AVE 012/195 STE"
    },
    {
        "ain": "3076024022",
        "type": "VAC/COR AVE O(PAV)/185 STE"
    },
    {
        "ain": "3078001011",
        "type": "VAC/VIC AVE N6/112 STE"
    },
    {
        "ain": "3079003051",
        "type": "VAC/VIC AVE P6/137 STE"
    },
    {
        "ain": "3079004034",
        "type": "VAC/VIC AVE P12/136 STE"
    },
    {
        "ain": "3079006026",
        "type": "VAC/COR AVE Q(DRT)/116 STE(NOG)"
    },
    {
        "ain": "3080003024",
        "type": "VAC/155 STE/VIC AVE S8"
    },
    {
        "ain": "3080008009",
        "type": "VAC/AVE S8/VIC 172 STE"
    },
    {
        "ain": "3080012006",
        "type": "VAC/171 STE/VIC AVE T2"
    },
    {
        "ain": "3081006042",
        "type": "VAC/VIC 191 STE/AVE S8"
    },
    {
        "ain": "3081008002",
        "type": "VAC/VIC 185 STE/AVE S14"
    },
    {
        "ain": "3081013025",
        "type": "VAC/VIC AVE T4/195 STE"
    },
    {
        "ain": "3081013035",
        "type": "VAC/195 STE/VIC AVE T4"
    },
    {
        "ain": "3081017007",
        "type": "VAC/VIC AVE U8/180 STE"
    },
    {
        "ain": "3081019023",
        "type": "VAC/VIC AVE U4/195 STE"
    },
    {
        "ain": "3082006016",
        "type": "VAC/VIC AVE P/212 STE"
    },
    {
        "ain": "3082012004",
        "type": "VAC/VIC 225 STE/AVE 010"
    },
    {
        "ain": "3082013014",
        "type": "VAC/VIC AVE O14/227 STE"
    },
    {
        "ain": "3082015004",
        "type": "VAC/COR 225 STE/AVE P8"
    },
    {
        "ain": "3082016009",
        "type": "VAC/COR AVE P8/VIC 226 STE"
    },
    {
        "ain": "3082017012",
        "type": "VAC/223 STE/VIC AVE P2"
    },
    {
        "ain": "3082021040",
        "type": "VAC/VIC AVE P4/215 STE"
    },
    {
        "ain": "3083002007",
        "type": "VAC/180 STE/VIC AVE V8"
    },
    {
        "ain": "3083005023",
        "type": "VAC/VIC AVE V6/200 STE"
    },
    {
        "ain": "3083006013",
        "type": "VAC/VIC AVE V6/200 STE"
    },
    {
        "ain": "3084002018",
        "type": "VAC/AVE Q4/VIC 208 STE"
    },
    {
        "ain": "3084013050",
        "type": "VAC/VIC AVE R2/225 STE"
    },
    {
        "ain": "3084016002",
        "type": "VAC/AVE S/VIC 220TH STE"
    },
    {
        "ain": "3084019032",
        "type": "VAC/VIC AVE R4/202 STE"
    },
    {
        "ain": "3085007001",
        "type": "32750 N 195TH ST"
    },
    {
        "ain": "3086008042",
        "type": "VAC/AVE X8 (DRT)/VIC 230 STE3"
    },
    {
        "ain": "3089005014",
        "type": "VAC/VIC AVE V11/243 STE"
    },
    {
        "ain": "3089005015",
        "type": "VAC/VIC AVE V12/243 STE"
    },
    {
        "ain": "3089005026",
        "type": "VAC/240 ST E/VIC AVE V10"
    },
    {
        "ain": "3089007022",
        "type": "VAC/VIC AVE V7/247 STE"
    },
    {
        "ain": "3089007048",
        "type": "VAC/VIC AVE V3/249 STE"
    },
    {
        "ain": "3089015002",
        "type": "VAC/VIC AVE V8/258 STE"
    },
    {
        "ain": "3089017007",
        "type": "VAC/VIC AVE V14/258 STE"
    },
    {
        "ain": "3091001010",
        "type": "VAC/VIC AVE O7/235 STE"
    },
    {
        "ain": "3091004012",
        "type": "VAC/241 STE/VIC AVE O2"
    },
    {
        "ain": "3091004023",
        "type": "VAC/242 STE/VIC AVE O4"
    },
    {
        "ain": "3091008015",
        "type": "VAC/VIC AVE O8/253 STE"
    },
    {
        "ain": "3091008052",
        "type": "VAC/VIC AVE O6/255 STE"
    },
    {
        "ain": "3091013019",
        "type": "VAC/VIC AVE P12/257 STE"
    },
    {
        "ain": "3091013062",
        "type": "VAC/VIC AVE P10/257 STE"
    },
    {
        "ain": "3091013076",
        "type": "VAC/VIC AVE Q/256 STE"
    },
    {
        "ain": "3105022046",
        "type": "VACANT LOT"
    },
    {
        "ain": "3111005030",
        "type": "2829 W AVENUE M12"
    },
    {
        "ain": "3113005090",
        "type": "VAC/VIC AVE B4/42 STW"
    },
    {
        "ain": "3113011019",
        "type": "VAC/AVE C2/VIC 42 STW"
    },
    {
        "ain": "3116004003",
        "type": "VAC/AVE A12/VIC 16 STW"
    },
    {
        "ain": "3116010034",
        "type": "VAC/12 PLW/VIC AVE E 3"
    },
    {
        "ain": "3116013023",
        "type": "VAC/COR AVE E7 PL/11 STW"
    },
    {
        "ain": "3117004018",
        "type": "VAC/AVE E/VIC 32ND STW"
    },
    {
        "ain": "3122034030",
        "type": "44632 21ST ST W"
    },
    {
        "ain": "3126027129",
        "type": "VAC/EXCHANGE PL/VIC AVE K-10"
    },
    {
        "ain": "3128010003",
        "type": "824 W AVENUE L10"
    },
    {
        "ain": "3133005005",
        "type": "44815 GENOA AVE"
    },
    {
        "ain": "3133005031",
        "type": "44720 10TH ST W"
    },
    {
        "ain": "3138010066",
        "type": "VAC/PONDERA ST/VIC DIVISION"
    },
    {
        "ain": "3145002003",
        "type": "VAC/VIC 10 STW/AVE A"
    },
    {
        "ain": "3145013006",
        "type": "167 E AVENUE F"
    },
    {
        "ain": "3145013025",
        "type": "VAC/AVE F/VIC DIVISION ST"
    },
    {
        "ain": "3145017022",
        "type": "VAC/VIC AVE E4/43 STE"
    },
    {
        "ain": "3145017024",
        "type": "VAC/VIC AVE E6/42 STE"
    },
    {
        "ain": "3145020145",
        "type": "VAC/VIC AVE D/45 STE"
    },
    {
        "ain": "3145020154",
        "type": "VAC/VIC AVE D/50 STE"
    },
    {
        "ain": "3145020156",
        "type": "VAC/VIC AVE D/50 STE"
    },
    {
        "ain": "3145027053",
        "type": "VAC/VIC AVE E8/50 STE"
    },
    {
        "ain": "3145036049",
        "type": "VAC/VIC 15 STE/AVE E4"
    },
    {
        "ain": "3150018019",
        "type": "VAC/AVE I/VIC 40TH STE"
    },
    {
        "ain": "3152001017",
        "type": "47516 20TH ST E"
    },
    {
        "ain": "3152004027",
        "type": "VAC/VIC 33 STE/AVE G"
    },
    {
        "ain": "3152006050",
        "type": "VAC/VIC AVE F6/46 STE"
    },
    {
        "ain": "3152015032",
        "type": "VAC/AVE G4/27 STE"
    },
    {
        "ain": "3162004008",
        "type": "VAC/VIC AVEL/197 STE"
    },
    {
        "ain": "3162010026",
        "type": "VAC/170 STE/VIC AVE K14"
    },
    {
        "ain": "3162014008",
        "type": "VAC/VIC AVE L2/195 STE"
    },
    {
        "ain": "3162015001",
        "type": "VAC/VIC AVE L4/194 ST E"
    },
    {
        "ain": "3162015006",
        "type": "VAC/VIC 193 STE/AVE L2"
    },
    {
        "ain": "3162017007",
        "type": "VAC/VIC AVE L5/192 STE"
    },
    {
        "ain": "3162028016",
        "type": "VAC/VIC AVE L/184 STE"
    },
    {
        "ain": "3162033006",
        "type": "VAC/VIC AVE M14/196 STE"
    },
    {
        "ain": "3162037036",
        "type": "VAC/VIC 185 STE/AVE M12"
    },
    {
        "ain": "3162038005",
        "type": "VAC/VIC 186 STE/AVE L3"
    },
    {
        "ain": "3170011012",
        "type": "VAC/COR AVE L(DRT)/40TH STE(PAV)"
    },
    {
        "ain": "3175017008",
        "type": "VAC/VIC AVE G12/10 STE"
    },
    {
        "ain": "3175017055",
        "type": "VAC/VIC AVE G10/13 STE"
    },
    {
        "ain": "3175018024",
        "type": "VAC/AVE G/VIC 9 STE"
    },
    {
        "ain": "3176002055",
        "type": "VAC/5TH STE/VIC AVE H6"
    },
    {
        "ain": "3201004042",
        "type": "VAC/60 STW/VIC AVE D4"
    },
    {
        "ain": "3201006015",
        "type": "VAC/52 STW/VIC AVE D4"
    },
    {
        "ain": "3203003011",
        "type": "VAC/70TH STW/VIC AVE I6"
    },
    {
        "ain": "3204017032",
        "type": "VAC/AVE M(PAV)/VIC 80TH STW"
    },
    {
        "ain": "3204023190",
        "type": "VAC/VIC CAL AQUEDUCT/70TH STW"
    },
    {
        "ain": "3205023015",
        "type": "VAC/VIC AVE M2/93 STW"
    },
    {
        "ain": "3205035023",
        "type": "VAC/VIC AVE M10/81 STW"
    },
    {
        "ain": "3206001030",
        "type": "VAC/VIC AVE P8/90 STW"
    },
    {
        "ain": "3206007030",
        "type": "VAC/VIC AVE P/56 STW"
    },
    {
        "ain": "3208002028",
        "type": "VAC/MADLER ST/IOWA AVE"
    },
    {
        "ain": "3209005021",
        "type": "5600 HUBBARD RD"
    },
    {
        "ain": "3212004013",
        "type": "VAC/VIC AGUA DULCE CYN RD/AV FRW"
    },
    {
        "ain": "3212014016",
        "type": "VAC/VIC AV FRWY/WINDRUSH RD"
    },
    {
        "ain": "3214012007",
        "type": "VAC/VIC KOONTZ RD/MINT CYN"
    },
    {
        "ain": "3217003019",
        "type": "VAC/2 MI N AV FRWY/VIC SHANNON V"
    },
    {
        "ain": "3218003003",
        "type": "VAC/AVE I15/VIC 96 STW"
    },
    {
        "ain": "3218007028",
        "type": "VAC/AVE I15/VIC 99 STW"
    },
    {
        "ain": "3218009012",
        "type": "VAC/AVE I15/VIC 95 STW"
    },
    {
        "ain": "3218010001",
        "type": "VAC/COR AVE I13/96 STW"
    },
    {
        "ain": "3218012013",
        "type": "VAC/AVE I13/VIC 98 PLW"
    },
    {
        "ain": "3218016004",
        "type": "VAC/AVE I12/VIC 96 STW"
    },
    {
        "ain": "3218018007",
        "type": "VAC/COR AVE I11/97 STW"
    },
    {
        "ain": "3218019002",
        "type": "VAC/AVE I11/VIC 98 PLW"
    },
    {
        "ain": "3218019016",
        "type": "VAC/COR 99 STW/AVE I12"
    },
    {
        "ain": "3218020054",
        "type": "VAC/AVE I11/VIC 99 STW"
    },
    {
        "ain": "3218022006",
        "type": "VAC/AVE I11/VIC 98 STW"
    },
    {
        "ain": "3218026026",
        "type": "VAC/AVE I10/VIC 98TH PLW"
    },
    {
        "ain": "3218026028",
        "type": "VAC/AVE I10/VIC 98TH STW"
    },
    {
        "ain": "3218027002",
        "type": "VAC/LANCASTER BL/VIC 99 STW"
    },
    {
        "ain": "3218027005",
        "type": "VAC/LANCASTER BL/VIC 100 STW"
    },
    {
        "ain": "3218027006",
        "type": "VAC/LANCASTER BL/VIC 100 STW"
    },
    {
        "ain": "3218027009",
        "type": "VAC/AVE I9/VIC 100 STW"
    },
    {
        "ain": "3218029015",
        "type": "VAC/LANCASTER BL/VIC 97 STW"
    },
    {
        "ain": "3220002001",
        "type": "VAC/COR 90 STW/AVE D12"
    },
    {
        "ain": "3220007106",
        "type": "VAC/70 STW/VIC AVE E4"
    },
    {
        "ain": "3220008007",
        "type": "47637 70TH ST W"
    },
    {
        "ain": "3224026006",
        "type": "VAC/LOWHILL DR/VIC NEARIDE DR"
    },
    {
        "ain": "3224028002",
        "type": "VAC/RANCH CLUB/VIC NEARSIDE DR"
    },
    {
        "ain": "3224034010",
        "type": "VAC/VIC 140TH STW/AQUEDUCT"
    },
    {
        "ain": "3225003010",
        "type": "VAC/BOXTREE DR/VIC BROOKWOOD RD"
    },
    {
        "ain": "3225004025",
        "type": "VAC/BOXTREE DR/VIC BROOKWOOD RD"
    },
    {
        "ain": "3225004034",
        "type": "VAC/BOXTREE DR/VIC ASHTREE DR"
    },
    {
        "ain": "3225011005",
        "type": "VAC/ELMTREE DR/VIC GUMTREE DR"
    },
    {
        "ain": "3227005017",
        "type": "VAC/CALLE EL MONTE/VIC ROSALITO"
    },
    {
        "ain": "3227005020",
        "type": "VAC/CALLE ROSALITO/CALLE CARONA"
    },
    {
        "ain": "3228005003",
        "type": "VAC/SPUNKY CYN RD/CALLE ARROYO"
    },
    {
        "ain": "3228017016",
        "type": "VAC/DESCONOCIDO/VIC NARANJO"
    },
    {
        "ain": "3234011003",
        "type": "VAC/VIC SAN FRANCISQUITO CYN RD"
    },
    {
        "ain": "3234018013",
        "type": "VAC/RAINBOW WK/VIC SHORELINE DR"
    },
    {
        "ain": "3234018014",
        "type": "VAC/RAINBOW WK/VIC SHORELINE DR"
    },
    {
        "ain": "3235015007",
        "type": "VAC/BLUEHILLS DR/VIC AKKER DR"
    },
    {
        "ain": "3235021014",
        "type": "VAC/BLUEHILLS DR/VIC ALGOOD DR"
    },
    {
        "ain": "3235021015",
        "type": "VAC/BLUEHILLS DR/VIC DENVIEW DR"
    },
    {
        "ain": "3235035001",
        "type": "VAC/MONACAN PL/VIC SANDROCK DR"
    },
    {
        "ain": "3238017026",
        "type": "VAC/206 STW/VIC AVE D13"
    },
    {
        "ain": "3247017011",
        "type": "VACANT LOT"
    },
    {
        "ain": "3248015017",
        "type": "VAC/VIC AVE K6/88 STW"
    },
    {
        "ain": "3251013003",
        "type": "VAC/VIC GORMAN POST RD/HAYRIDE R"
    },
    {
        "ain": "3251013006",
        "type": "VAC/GORMAN POST RD/VIC ST FRWY 5"
    },
    {
        "ain": "3258006008",
        "type": "VAC/COR AVE A8(TRL)/165 STW(NOG)"
    },
    {
        "ain": "3258013019",
        "type": "VAC/COR AVE B10/156 STW"
    },
    {
        "ain": "3258013028",
        "type": "VAC/(B12) GALPIN/VIC 155 STW"
    },
    {
        "ain": "3258015013",
        "type": "VAC/AVE B14/VIC 154 STW"
    },
    {
        "ain": "3258016011",
        "type": "VAC/AVE B8/VIC 151 STW"
    },
    {
        "ain": "3260009029",
        "type": "VAC/COR AVE B/67 STW"
    },
    {
        "ain": "3260013010",
        "type": "VAC/COR ANTELOPE HWY/AVE C14"
    },
    {
        "ain": "3261002042",
        "type": "VAC/VIC AVE A3/127 STW"
    },
    {
        "ain": "3262014003",
        "type": "VAC/90 STW/VIC AVE B8"
    },
    {
        "ain": "3262019025",
        "type": "VAC/VIC 102 STW/AVE C2"
    },
    {
        "ain": "3263003007",
        "type": "VAC/VIC AVE D8/125 STW"
    },
    {
        "ain": "3263012080",
        "type": "VAC/VIC AVE E12/135 STW"
    },
    {
        "ain": "3263018011",
        "type": "VAC/AVE D/VIC 130 STW"
    },
    {
        "ain": "3263018014",
        "type": "VAC/VIC AVE D4/130 STW"
    },
    {
        "ain": "3263018035",
        "type": "VAC/AVE D/VIC 135 STW"
    },
    {
        "ain": "3263018036",
        "type": "VAC/AVE D/VIC 135 STW"
    },
    {
        "ain": "3263018037",
        "type": "VAC/AVE D/VIC 135 STW"
    },
    {
        "ain": "3263019002",
        "type": "VAC/VIC AVE D6/135 STW"
    },
    {
        "ain": "3263019010",
        "type": "VAC/VIC AVE D6/135 STW"
    },
    {
        "ain": "3263019016",
        "type": "VAC/VIC AVE D6/135 STW"
    },
    {
        "ain": "3263019021",
        "type": "VAC/VIC AVE D8/130 STW"
    },
    {
        "ain": "3263019022",
        "type": "VAC/VIC AVE D8/130 STW"
    },
    {
        "ain": "3263019028",
        "type": "VAC/VIC AVE D8/130 STW"
    },
    {
        "ain": "3263019036",
        "type": "VAC/VIC AVE D6/130 STW"
    },
    {
        "ain": "3264022019",
        "type": "VAC/VIC AVE E13/105 STW"
    },
    {
        "ain": "3266011032",
        "type": "VAC/COR 133 STW/AVE H10"
    },
    {
        "ain": "3266015003",
        "type": "VAC/COR MUNZ RCH/CHETAC(H12)"
    },
    {
        "ain": "3267003007",
        "type": "VAC/VIC 115 STW/AVE I4"
    },
    {
        "ain": "3267003045",
        "type": "VAC/VIC AVE I6/VIC 112TH STW"
    },
    {
        "ain": "3267003054",
        "type": "VACANT LOT"
    },
    {
        "ain": "3267016024",
        "type": "VAC/AVE J/VIC 129 STW"
    },
    {
        "ain": "3267028005",
        "type": "VAC/COR AVE I8/137 STW"
    },
    {
        "ain": "3267028019",
        "type": "VAC/137 STW/VIC AVE I6"
    },
    {
        "ain": "3270002026",
        "type": "VACANT LOT"
    },
    {
        "ain": "3270003063",
        "type": "VACANT LOT"
    },
    {
        "ain": "3270005005",
        "type": "VACANT LOT"
    },
    {
        "ain": "3270008063",
        "type": "VACANT LOT"
    },
    {
        "ain": "3270010033",
        "type": "VACANT LOT"
    },
    {
        "ain": "3270014026",
        "type": "VACANT LOT"
    },
    {
        "ain": "3270015047",
        "type": "VACANT LOT"
    },
    {
        "ain": "3271016037",
        "type": "VACANT LOT"
    },
    {
        "ain": "3271017021",
        "type": "VACANT LOT"
    },
    {
        "ain": "3271017022",
        "type": "VACANT LOT"
    },
    {
        "ain": "3271017033",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272002109",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272002110",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272003096",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272003098",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272003102",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272003114",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272004082",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272004089",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272005097",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272006087",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272007103",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272007112",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272008071",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272009083",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272010007",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272010008",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272010095",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272011083",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272011105",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272012080",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272012093",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272013082",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272013085",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272013105",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272014097",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272014101",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272015102",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272016075",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272016091",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272030094",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272030100",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272030108",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272031030",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272031043",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272032083",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272032084",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272032086",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272032090",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272033039",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272033093",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272034098",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272035064",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272035091",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272036092",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272036098",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272037105",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272037107",
        "type": "VACANT LOT"
    },
    {
        "ain": "3272037109",
        "type": "VACANT LOT"
    },
    {
        "ain": "3275018003",
        "type": "VAC/VIC PINE CYN/SECCOMBE RD"
    },
    {
        "ain": "3277007002",
        "type": "VAC/COR AVE B8(PAV)/250 STW(NOG)"
    },
    {
        "ain": "3277027022",
        "type": "VAC/COR AVE C6(DRT)/267 STW(TRL)"
    },
    {
        "ain": "3278018032",
        "type": "VAC/DESERT EGE(DRT)/VIC 243 STW"
    },
    {
        "ain": "3302003059",
        "type": "VAC/VIC AVE D10/53 STE"
    },
    {
        "ain": "3302005040",
        "type": "VAC/VIC AVE D13/59 STE"
    },
    {
        "ain": "3307003024",
        "type": "VAC/AVE E-2/VIC 91 STE"
    },
    {
        "ain": "3307003025",
        "type": "VAC/AVE E-2/VIC 91 STE"
    },
    {
        "ain": "3307003026",
        "type": "VAC/AVE E-2/VIC 91 STE"
    },
    {
        "ain": "3307004022",
        "type": "VAC/AVE E3/VIC 91 STE"
    },
    {
        "ain": "3307004024",
        "type": "VAC/AVE E3/VIC 91 STE"
    },
    {
        "ain": "3307004025",
        "type": "VAC/COR AVE E3(NOG)/91 STE(NOG)"
    },
    {
        "ain": "3307005004",
        "type": "VAC/AVE E3/VIC 91 STE"
    },
    {
        "ain": "3307005009",
        "type": "VAC/AVE E4/VIC 91 STE"
    },
    {
        "ain": "3307005010",
        "type": "VAC/COR AVE E5(NOG)/91 STE(NOG)"
    },
    {
        "ain": "3310005061",
        "type": "VAC/VIC AVE D4/128 STE"
    },
    {
        "ain": "3310006010",
        "type": "VAC/VIC AVE D10/123 STE"
    },
    {
        "ain": "3310010026",
        "type": "VAC/COR 135 STE/AVE E13"
    },
    {
        "ain": "3310012042",
        "type": "VAC/VIC AVE E10/124 STE"
    },
    {
        "ain": "3314006008",
        "type": "VAC/VIC AVE E/165 STE"
    },
    {
        "ain": "3314008042",
        "type": "VAC/VIC 165 STE/AVE F8"
    },
    {
        "ain": "3314018004",
        "type": "VAC/VIC 155 STE/AVE F4"
    },
    {
        "ain": "3314019019",
        "type": "VAC/VIC AVE F12/160 STE"
    },
    {
        "ain": "3314019020",
        "type": "VAC/VIC AVE F12/160 STE"
    },
    {
        "ain": "3316002001",
        "type": "VAC/VIC AVE E4/170 STE"
    },
    {
        "ain": "3316002007",
        "type": "VAC/AVE E8/VIC 172 STE"
    },
    {
        "ain": "3316002008",
        "type": "VAC/AVE E8/VIC 174 STE"
    },
    {
        "ain": "3316002037",
        "type": "VAC/VIC AVE E6/173 STE"
    },
    {
        "ain": "3316002043",
        "type": "VAC/VIC AVE E4/171 STE"
    },
    {
        "ain": "3316002044",
        "type": "VAC/VIC AVE E6/171 STE"
    },
    {
        "ain": "3316005047",
        "type": "VAC/VIC AVE E10/182 STE"
    },
    {
        "ain": "3316005058",
        "type": "VAC/VIC AVE E10/183 STE"
    },
    {
        "ain": "3316005064",
        "type": "VAC/AVE E8/VIC 185 STE"
    },
    {
        "ain": "3316006011",
        "type": "VAC/VIC AVE E2/191 STE"
    },
    {
        "ain": "3316006015",
        "type": "VAC/AVE E8/VIC 191 STE"
    },
    {
        "ain": "3316017044",
        "type": "VAC/VIC AVE F2/187 STE"
    },
    {
        "ain": "3318001013",
        "type": "VAC/VIC AVE A/206 STE"
    },
    {
        "ain": "3318001021",
        "type": "VAC/VIC AVE A4/205 STE"
    },
    {
        "ain": "3318003032",
        "type": "VAC/VIC AVE A2/214 STE"
    },
    {
        "ain": "3318003048",
        "type": "VAC/VIC AVE A/216 STE"
    },
    {
        "ain": "3318003087",
        "type": "VAC/VIC AVE A4/220 STE"
    },
    {
        "ain": "3318003093",
        "type": "VAC/VIC AVE A6/214 STE"
    },
    {
        "ain": "3318004043",
        "type": "VAC/VIC AVE A10/220 STE"
    },
    {
        "ain": "3318005027",
        "type": "VAC/VIC AVE A8/225 STE"
    },
    {
        "ain": "3318005032",
        "type": "VAC/VIC AVE A8/220 STE"
    },
    {
        "ain": "3318005033",
        "type": "VAC/VIC AVE A8/220 STE"
    },
    {
        "ain": "3318006031",
        "type": "VAC/VIC AVE B/220 STE"
    },
    {
        "ain": "3318008003",
        "type": "VAC/225 STE(DRT)/VIC AVE C"
    },
    {
        "ain": "3318008026",
        "type": "VAC/228 STE(DRT)/VIC AVE B13"
    },
    {
        "ain": "3318008031",
        "type": "VAC/230 STE(DRT)/VIC AVE B12"
    },
    {
        "ain": "3318009070",
        "type": "VAC/VIC AVE C/215 STE"
    },
    {
        "ain": "3318011044",
        "type": "VAC/VIC AVE C4/205 STE"
    },
    {
        "ain": "3318013025",
        "type": "VAC/VIC AVE C4/210 STE"
    },
    {
        "ain": "3318013046",
        "type": "VAC/VIC AVE C4/215 STE"
    },
    {
        "ain": "3318013048",
        "type": "VAC/VIC AVE C4/215 STE"
    },
    {
        "ain": "3318014056",
        "type": "VAC/VIC AVE D/210 STE"
    },
    {
        "ain": "3318014079",
        "type": "VAC/VIC AVE C8/215 STE"
    },
    {
        "ain": "3318015036",
        "type": "VAC/VIC AVE C4/230 STE"
    },
    {
        "ain": "3322003093",
        "type": "VAC/AVE D8(DRT)/VIC 210 STE"
    },
    {
        "ain": "3322003094",
        "type": "VAC/VIC AVE D8/210 STE"
    },
    {
        "ain": "3322003096",
        "type": "VAC/VIC AVE D10/210 STE"
    },
    {
        "ain": "3322006007",
        "type": "VAC/VIC AVE E10/227 STE"
    },
    {
        "ain": "3322006026",
        "type": "VAC/220 STE(DRT)/VIC AVE E10"
    },
    {
        "ain": "3322006040",
        "type": "VAC/VIC AVE E10/222 STE"
    },
    {
        "ain": "3322006060",
        "type": "VAC/VIC AVE E10/225 STE"
    },
    {
        "ain": "3322006062",
        "type": "VAC/AVE F/VIC 225TH STE"
    },
    {
        "ain": "3322007006",
        "type": "VAC/VIC AVE E10/218 STE"
    },
    {
        "ain": "3322007014",
        "type": "VAC/VIC AVE E10/218 STE"
    },
    {
        "ain": "3322008045",
        "type": "VAC/VIC AVE E8/210 STE"
    },
    {
        "ain": "3322008047",
        "type": "VAC/VIC AVE E8/210 STE"
    },
    {
        "ain": "3322012079",
        "type": "VAC/VIC 205 STE/VIC AVE F8"
    },
    {
        "ain": "3322013045",
        "type": "VAC/VIC AVE F8/VIC 215 STE"
    },
    {
        "ain": "3322013047",
        "type": "VAC/VIC AVE F/VIC 215 STE"
    },
    {
        "ain": "3322016004",
        "type": "VAC/COR 227 STE/AVE F6"
    },
    {
        "ain": "3322017007",
        "type": "VAC/COR 230 STE(PAV)/AVE F12"
    },
    {
        "ain": "3322021004",
        "type": "VAC/AVE F8/VIC 210 STE"
    },
    {
        "ain": "3322021054",
        "type": "VAC/VIC AVE F/VIC 205 STE"
    },
    {
        "ain": "3322022004",
        "type": "VAC/COR 228 STE/AVE D4"
    },
    {
        "ain": "3322022009",
        "type": "VAC/COR AVE D2/VIC 230 STE"
    },
    {
        "ain": "3322023021",
        "type": "VAC/COR 227 STE/AVE D6"
    },
    {
        "ain": "3322023022",
        "type": "VAC/COR 228 STE/AVE D6"
    },
    {
        "ain": "3322023025",
        "type": "VAC/COR 230 STE/AVE D4"
    },
    {
        "ain": "3322023028",
        "type": "VAC/228 STE/AVE D4"
    },
    {
        "ain": "3322024014",
        "type": "VAC/COR 226 STE/AVE D10"
    },
    {
        "ain": "3322024023",
        "type": "VAC/AVE D10/VIC 230 STE"
    },
    {
        "ain": "3322025003",
        "type": "VAC/AVE E/VIC 227 STE"
    },
    {
        "ain": "3322027029",
        "type": "VAC/223 STE/VIC AVE D12"
    },
    {
        "ain": "3322027031",
        "type": "VAC/AVE D12/VIC 225 STE"
    },
    {
        "ain": "3322028010",
        "type": "VAC/AVE D6/VIC 220 STE"
    },
    {
        "ain": "3322028028",
        "type": "VAC/COR 222 STE/AVE D8"
    },
    {
        "ain": "3322031007",
        "type": "VAC/VIC 215 STE/VIC AVE D8"
    },
    {
        "ain": "3322031014",
        "type": "VAC/VIC AVE D6/VIC 215 STE"
    },
    {
        "ain": "3322031020",
        "type": "VAC/VIC AVE D6/VIC 220 STE"
    },
    {
        "ain": "3326004075",
        "type": "VAC/VIC AVE B8/245 STE"
    },
    {
        "ain": "3326009059",
        "type": "VAC/VIC AVE C6/245 STE"
    },
    {
        "ain": "3326009060",
        "type": "VAC/VIC 245 STE/AVE C6"
    },
    {
        "ain": "3326010021",
        "type": "VAC/VIC 240 STE/AVE C10"
    },
    {
        "ain": "3326011003",
        "type": "VAC/VIC 250 STE/AVE C4"
    },
    {
        "ain": "3326014034",
        "type": "VAC/VIC AVE D10/247 STE"
    },
    {
        "ain": "3326014046",
        "type": "VAC/VIC AVE D12/255 STE"
    },
    {
        "ain": "3326015055",
        "type": "VAC/VIC AVE D/237 STE"
    },
    {
        "ain": "3326018039",
        "type": "VAC/VIC AVE E12/237 STE"
    },
    {
        "ain": "3326018040",
        "type": "VAC/VIC AVE E14/236 STE"
    },
    {
        "ain": "3326018041",
        "type": "VAC/VIC AVE E14/237 STE"
    },
    {
        "ain": "3326019039",
        "type": "VAC/VIC AVE E/243 STE"
    },
    {
        "ain": "3326019040",
        "type": "VAC/VIC AVE E/243 STE"
    },
    {
        "ain": "3326019054",
        "type": "VAC/VIC AVE E4/243 STE"
    },
    {
        "ain": "3326019055",
        "type": "VAC/VIC AVE E4/244 STE"
    },
    {
        "ain": "3326019056",
        "type": "VAC/VIC AVE E4/244 STE"
    },
    {
        "ain": "3326019059",
        "type": "VAC/VIC AVE E4/245 STE"
    },
    {
        "ain": "3326019077",
        "type": "VAC/VIC AVE E4/245 STE"
    },
    {
        "ain": "3326024015",
        "type": "VAC/VIC AVE F/247 STE"
    },
    {
        "ain": "3326024023",
        "type": "VAC/COR AVE G/242 STE(NOG)"
    },
    {
        "ain": "3326025003",
        "type": "VAC/COR AVE F4/236 STE"
    },
    {
        "ain": "3326025010",
        "type": "VAC/237 STE/VIC AVE F8"
    },
    {
        "ain": "3326025011",
        "type": "VAC/COR 235 STE/SILVERDOLLAR ST"
    },
    {
        "ain": "3326025033",
        "type": "VAC/AVE F8/VIC 235 STE"
    },
    {
        "ain": "3326027022",
        "type": "VAC/COR AVE F2/232 STE"
    },
    {
        "ain": "3326027025",
        "type": "VAC/COR 235 STE/AVE F4"
    },
    {
        "ain": "3326029076",
        "type": "VAC/VIC 235 STE/AVE F12"
    },
    {
        "ain": "3326029137",
        "type": "VAC/VIC AVE F8/235 STE"
    },
    {
        "ain": "3326030003",
        "type": "VAC/VIC 255 STE/AVE F10"
    },
    {
        "ain": "3326030013",
        "type": "VAC/VIC AVE F8/256 STE"
    },
    {
        "ain": "3326030015",
        "type": "VAC/VIC AVE F8/257 STE"
    },
    {
        "ain": "3326031002",
        "type": "VAC/VIC 250 STE/AVE F12"
    },
    {
        "ain": "3326032031",
        "type": "VAC/AVE F8/VIC 237 STE"
    },
    {
        "ain": "3326032034",
        "type": "VAC/VIC 240 STE/AVE F10"
    },
    {
        "ain": "3326032036",
        "type": "VAC/VIC 235 STE/AVE F10"
    },
    {
        "ain": "3326032037",
        "type": "VAC/VIC AVE F10/235 STE"
    },
    {
        "ain": "3326033036",
        "type": "VAC/VIC AVE F12/240 STE"
    },
    {
        "ain": "3326034033",
        "type": "VAC/COR AVE B3/232 STE"
    },
    {
        "ain": "3326034034",
        "type": "VAC/COR AVE B3/234 STE"
    },
    {
        "ain": "3326035007",
        "type": "VAC/VIC AVE B8/235 STE"
    },
    {
        "ain": "3326037005",
        "type": "VAC/VIC AVE A2/240 STE"
    },
    {
        "ain": "3334026007",
        "type": "VAC/COR AVE G4/236 STE"
    },
    {
        "ain": "3334026010",
        "type": "VAC/COR AVE G4/236 STE"
    },
    {
        "ain": "3334026017",
        "type": "VAC/235 STE/VIC AVE G8"
    },
    {
        "ain": "3334027002",
        "type": "VAC/AVE G8/VIC 235 STE"
    },
    {
        "ain": "3334027005",
        "type": "VAC/COR AVE G10/237 STE"
    },
    {
        "ain": "3334027006",
        "type": "VAC/AVE G10/VIC MELLIER ST"
    },
    {
        "ain": "3334027012",
        "type": "VAC/COR AVE G10/MELLIER ST"
    },
    {
        "ain": "3336005038",
        "type": "VAC/VIC AVE J8/VIC 240 STE"
    },
    {
        "ain": "3336009017",
        "type": "VAC/AVE K/VIC 255 STE"
    },
    {
        "ain": "3336010016",
        "type": "VAC/VIC AVE L/VIC 255 STE"
    },
    {
        "ain": "3336015020",
        "type": "VAC/245 STE/AVE K8"
    },
    {
        "ain": "3336015022",
        "type": "VAC/AVE K8/VIC 246 STE"
    },
    {
        "ain": "3336016027",
        "type": "VAC/VIC 244 STE/AVE K12"
    },
    {
        "ain": "3336016029",
        "type": "VAC/VIC 244 STE/AVE K10"
    },
    {
        "ain": "3336016030",
        "type": "VAC/VIC 243 STE/AVE K12"
    },
    {
        "ain": "3336017029",
        "type": "VAC/VIC AVE K/237 STE"
    },
    {
        "ain": "3338004024",
        "type": "VAC/VIC AVE L8/242 STE"
    },
    {
        "ain": "3338005037",
        "type": "VAC/COR 250 STE/AVE L8"
    },
    {
        "ain": "3338007016",
        "type": "VAC/VIC AVE M4/253 STE"
    },
    {
        "ain": "3338010048",
        "type": "VAC/VIC 247 STE/AVE M5"
    },
    {
        "ain": "3338010054",
        "type": "VAC/VIC 247 STE/AVE M6"
    },
    {
        "ain": "3338014003",
        "type": "VAC/AVE M/VIC 231 STE"
    },
    {
        "ain": "3338015001",
        "type": "VAC/COR 230E/AVE M8"
    },
    {
        "ain": "3338020004",
        "type": "VAC/COR AVE N13/243 STE"
    },
    {
        "ain": "3338022030",
        "type": "VAC/VIC 255 STE/AVE N6"
    },
    {
        "ain": "3342001039",
        "type": "VAC/VIC AVE H/205 STE"
    },
    {
        "ain": "3342001059",
        "type": "VAC/VIC AVE G4/205 STE"
    },
    {
        "ain": "3342001107",
        "type": "VAC/VIC AVE G12/210 STE"
    },
    {
        "ain": "3342001138",
        "type": "VAC/VIC AVE G12/205 STE"
    },
    {
        "ain": "3342002042",
        "type": "VAC/VIC AVE G14/217 STE"
    },
    {
        "ain": "3342002110",
        "type": "VAC/VIC AVE G14/218 STE"
    },
    {
        "ain": "3342002111",
        "type": "VAC/220 STE/VIC AVE G14"
    },
    {
        "ain": "3342002126",
        "type": "VAC/VIC 215TH STE/AVE G"
    },
    {
        "ain": "3342002127",
        "type": "VAC/VIC AVE G/215TH ST E"
    },
    {
        "ain": "3342003050",
        "type": "VAC/VIC AVE G8/222 STE"
    },
    {
        "ain": "3342009009",
        "type": "VAC/210 STE/VIC AVE H4"
    },
    {
        "ain": "3342010014",
        "type": "VAC/VIC AVE H4/206 STE"
    },
    {
        "ain": "3342011028",
        "type": "VAC/VIC 207 STE/AVE H10"
    },
    {
        "ain": "3342022005",
        "type": "VAC/COR 230 STE/AVE G4"
    },
    {
        "ain": "3342023020",
        "type": "VAC/VIC AVE G9/216 STE"
    },
    {
        "ain": "3344003029",
        "type": "VAC/VIC AVE J6/219 STE"
    },
    {
        "ain": "3344011055",
        "type": "VAC/VIC 206 STE/AVE K6"
    },
    {
        "ain": "3344011058",
        "type": "VAC/205 STE/VIC AVE K4"
    },
    {
        "ain": "3346007006",
        "type": "VAC/AVE M/VIC 230 STE"
    },
    {
        "ain": "3346008017",
        "type": "VAC/VIC AVE M6/220 STE"
    },
    {
        "ain": "3346008046",
        "type": "VAC/VIC AVE M6/225 STE"
    },
    {
        "ain": "3346008059",
        "type": "VAC/VIC AVE M4/225 STE"
    },
    {
        "ain": "3346023026",
        "type": "VAC/VIC AVE N10/215 STE"
    },
    {
        "ain": "3346026002",
        "type": "VAC/VIC AVE N4/225 STE"
    },
    {
        "ain": "3350002003",
        "type": "VAC/VIC 172 STE/AVE G10"
    },
    {
        "ain": "3350013031",
        "type": "VAC/VIC 176 STE/AVE H6"
    },
    {
        "ain": "3358009089",
        "type": "VAC/165 STE(DRT)/VIC AVE H6"
    },
    {
        "ain": "3358009145",
        "type": "VAC/AVE H(DRT)/165 STE(DRT)"
    },
    {
        "ain": "3358012115",
        "type": "VAC/VIC AVE I4/145 STE"
    },
    {
        "ain": "3361002029",
        "type": "VAC/COR AVE J12/145 STE"
    },
    {
        "ain": "3361007030",
        "type": "VAC/155 STE/VIC AVE J10"
    },
    {
        "ain": "3370012008",
        "type": "VAC/VIC AVE K14/125 STE"
    },
    {
        "ain": "3374021012",
        "type": "VAC/VIC AVE H14/95 STE"
    },
    {
        "ain": "3376017028",
        "type": "VAC/VIC 105 STE/AVE I10"
    },
    {
        "ain": "3376029027",
        "type": "VAC/VIC AVE J8/80 STE"
    },
    {
        "ain": "3384017007",
        "type": "VAC/VIC  AVE  J8/68 STE"
    },
    {
        "ain": "3386012032",
        "type": "VAC/VIC AVE K8/73 STE"
    },
    {
        "ain": "4380017029",
        "type": "VACANT LOT"
    },
    {
        "ain": "4380018002",
        "type": "VACANT LOT"
    },
    {
        "ain": "4434028034",
        "type": "VACANT LOT"
    },
    {
        "ain": "4438035005",
        "type": "VACANT LOT"
    },
    {
        "ain": "4438039016",
        "type": "VACANT LOT"
    },
    {
        "ain": "4441027017",
        "type": "VACANT LOT"
    },
    {
        "ain": "4448017024",
        "type": "VACANT LOT"
    },
    {
        "ain": "4470002036",
        "type": "6363 LUNITA RD"
    },
    {
        "ain": "5066022029",
        "type": "1743 S OGDEN DR"
    },
    {
        "ain": "5076002004",
        "type": "933 S WESTMORELAND AVE"
    },
    {
        "ain": "5103012020",
        "type": "617 E 56TH ST"
    },
    {
        "ain": "5104028025",
        "type": "5721 COMPTON AVE"
    },
    {
        "ain": "5104028026",
        "type": "VACANT LOT"
    },
    {
        "ain": "5304036002",
        "type": "VACANT LOT"
    },
    {
        "ain": "5306009037",
        "type": "VACANT LOT"
    },
    {
        "ain": "5467022001",
        "type": "VACANT LOT"
    },
    {
        "ain": "5529025063",
        "type": "950 N KINGS RD NO 128"
    },
    {
        "ain": "5608010001",
        "type": "VACANT LOT"
    },
    {
        "ain": "5689006022",
        "type": "VACANT LOT"
    },
    {
        "ain": "5689006023",
        "type": "VACANT LOT"
    },
    {
        "ain": "5864030006",
        "type": "VACANT LOT"
    },
    {
        "ain": "6013023029",
        "type": "665 W FLORENCE AVE"
    },
    {
        "ain": "6048031021",
        "type": "VACANT LOT"
    },
    {
        "ain": "6071002012",
        "type": "631 E 109TH ST"
    },
    {
        "ain": "6137028021",
        "type": "14636 S BAHAMA AVE"
    },
    {
        "ain": "6202038026",
        "type": "8129 SANTA FE AVE"
    },
    {
        "ain": "7162012090",
        "type": "9137 RAMONA ST 7"
    },
    {
        "ain": "7241031014",
        "type": "667 FLINT AVE"
    },
    {
        "ain": "7337004010",
        "type": "850 E DESFORD ST"
    },
    {
        "ain": "7458008041",
        "type": "919 S ALMA STE UNIT D"
    },
    {
        "ain": "8036010014",
        "type": "12012 GRAYLING AVE"
    },
    {
        "ain": "8448031070",
        "type": "VACANT LOT"
    },
    {
        "ain": "8493042254",
        "type": "VACANT LOT"
    },
    {
        "ain": "8579018019",
        "type": "11109 WALNUT ST"
    },
    {
        "ain": "8642021012",
        "type": "1005 W GLADSTONE ST"
    },
    {
        "ain": "8658006014",
        "type": "VACANT LOT"
    },
    {
        "ain": "8675015001",
        "type": "VACANT LOT"
    },
    {
        "ain": "8675018017",
        "type": "VACANT LOT"
    },
    {
        "ain": "8678019012",
        "type": "VACANT LOT"
    },
    {
        "ain": "8735002018",
        "type": "2210 S AZUSA AVE"
    },
    {
        "ain": "8735002019",
        "type": "VACANT LOT"
    }
]



  private map: any;
  private markers: L.Marker[] = []
  constructor(private readonly parcelService: LAParcelService) {

  }

  async ngOnInit() {
    this.map = L.map('map').setView([34.0256131, -118.5467913], 9);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
  async displayMarkers(data: LAProperty[]) {

    const map = this.map as L.Map;

    for (let prop of data) {
      const ain = prop.ain?.replaceAll('-', '')
      const d = await this.parcelService.getParcelDetail(ain)
      const marker = L.marker([d.Latitude, d.Longitude]).addTo(map);
      this.markers.push(marker)
      marker.bindPopup(`<a href="https://portal.assessor.lacounty.gov/parceldetail/${d.AIN}" target="_blank">${d.AIN}</a> <br> ${prop.type}`);
      // .openPopup();
    }
  }
  clearMarkers() {
    const map = this.map as L.Map;
    const markers = this.markers;
    markers.forEach((marker) => {
      map.removeLayer(marker)
    })
    this.markers = [];
  }

  async loadNoVacant() {
    this.clearMarkers();
    await this.displayMarkers(this.data.filter(p => p.type != 'VACANT LOT'));
  }
  async loadVacant() {
    this.clearMarkers();
    await this.displayMarkers(this.data.filter(p => p.type == 'VACANT LOT'));
  }
  async loadAll() {
    this.clearMarkers();
    await this.displayMarkers(this.data);
  }
}
