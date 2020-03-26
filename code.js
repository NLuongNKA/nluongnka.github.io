/*
The dropdown will give a list of options from which the user can 
  choose only one option. In the design mode you can set the options  
  for the dropdown menu.
  
*/

/*
The code waits for the go button to get clicked and looks to see what option
  the user has selected in the dropdown menu. It displays a screen that the
  selected direction leads to. 
*/
setText("direction_dropdown", "");
setText("dropdown6", "");

if (getText("dropdown6") == getText("direction_dropdown")) {
  hideElement("go_button");
  
}
if (getText("dropdown6") != getText("direction_dropdown")) {
  showElement("go_button");
}
    setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
    setText("dropdownCGS9001","");
hideElement("dropdown3500");
hideElement("go_button");
hideElement("BSM-6000");
hideElement("drop_1700");
//Change of firmware for each products
onEvent("direction_dropdown", "click", function(event) {
  if (getText("direction_dropdown") == "BSM-1700 (+UG/TS)") {
    showElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9002");
    hideElement("dropdown3500");
    hideElement("BSM-6000");
    hideElement("dropdownCSM1901");
    hideElement("dropdownqp999P");
    setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");

  } else if ((getText("direction_dropdown") == "BSM-3500")) {
    showElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9002");
    hideElement("drop_1700");
    hideElement("dropdownCSM1901");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
    setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
  } else if ((getText("direction_dropdown") == "BSM-6000")) {
    hideElement("drop_1700");
    hideElement("BSM-3500");
    showElement("BSM-6000");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9002");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("dropdownCSM1901");
    hideElement("dropdownqp999P");
    setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
  } else if ((getText("direction_dropdown") == getText("dropdown6"))) {
    hideElement("go_button");
  } else if ((getText("direction_dropdown") == "CSM-1901")) {
       showElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
  } else if ((getText("direction_dropdown") == "CNS-6201")) {
      hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    showElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
 } else if ((getText("direction_dropdown") == "CNS-6801")) {
     hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    showElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "RNS-9703(Old GUI)")) {
      hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    showElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "RNS-6803(Audio)")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    showElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "RNS-6804(No Audio)")) {
     hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    showElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "EDNS-9001 Prefense")) {
     hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    showElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "GZ-100P (+UG/TS)")) {
     hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    showElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "ORG-9100")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    showElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "CGS-9001 Pager Gateway (Legacy)")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    showElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");

} else if ((getText("direction_dropdown") == "CGS-9002 HL7 Gateway (Legacy)")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    showElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-983P NetKonnect/RNS Server")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    showElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-986P Host1000 Server")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    showElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-988P Unified Gateway")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    showElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-988P Enterprise Gateway")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    showElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-989P ViTrac iOS")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    showElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-991P ViTrac Android")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    showElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
} else if ((getText("direction_dropdown") == "QP-999P NKAnywhere")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    showElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");

} else if ((getText("direction_dropdown") == "OLG-3800")) {
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    showElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9001");
    hideElement("dropdown3500");
    hideElement("drop_1700");
    hideElement("BSM-6000");
    hideElement("dropdownqp999P");
      setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");




  } else {
    
  }
});
onEvent("Homebutton2", "click", function(event) {
  console.log("Homebutton2 clicked!");
  setScreen("start_screen");
});
onEvent("go_button", "click", function(event) {
  console.log("go_button clicked!");
  //To check if ready for 1700 
  if (getText("drop_1700") == "01-15" && getText("dropdown6") == "Unified Gateway (01-08a)") {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen2");
    
  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen1"); 
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Unified Gateway (01-10)")) {
  	setScreen("screen1"); 
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");
  	

  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Unified Gateway (01-11)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  setScreen("screen2");
  
  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  	
  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  setScreen("screen1");
  
  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  setScreen("screen1");

BSM3500
  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Unified Gateway (01-10)")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Unified Gateway (01-11)")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  	setScreen("screen1");;
  } else if ((getText("dropdown3500") == "08-11" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
   setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");
   } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Unified Gateway (01-10)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");
   } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");

  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Unified Gateway (01-11)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  setScreen("screen1");
  
  
  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
   setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Unified Gateway (01-10)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Unified Gateway (01-11)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");

//cns6201

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");
 
  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Unified Gateway (01-10)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Unified Gateway (01-11)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");

//CNS6801
  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Unified Gateway (01-08a)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Unified Gateway (01-10)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Unified Gateway (01-10)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Unified Gateway (01-11)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Unified Gateway (01-11)")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(01-02)")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(01-03)")) { 
  	setScreen("screen1");
  	
  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(02-01)")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(02-03)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(02-04)")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(02-06)")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("dropdown6") == "Enterprise Gateway(04-01)")) { 
  	setScreen("screen1");
  	
//RNS9703

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
      setText("Sol1", "=NA");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
      setText("Sol1", "=NA");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Unified Gateway (01-10)")) {
      setText("Sol1", "=NA");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Unified Gateway (01-10)")) {
      setText("Sol1", "=NA");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Unified Gateway (01-11)")) {
      setText("Sol1", "=NA");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Unified Gateway (01-11)")) {
      setText("Sol1", "=NA");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
    

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
    
    
//RNS6803


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Unified Gateway (01-10)")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Unified Gateway (01-11)")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");


//RNS6804


  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
         setScreen("screen2");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");

//EDNS-9001

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
          setText("Sol1", "NA");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setText("Sol1", "NA");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Unified Gateway (01-10)")) {
          setText("Sol1", "NA");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setText("Sol1", "NA");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Unified Gateway (01-11)")) {
          setText("Sol1", "NA");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setText("Sol1", "NA");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
  setScreen("screen3");

//GZ-100P


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
            setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Unified Gateway (01-10)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Unified Gateway (01-11)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "RNS-9703(Old GUI)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "RNS-9703(Old GUI)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "RNS-9703(Old GUI)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "RNS-9703(Old GUI)")) {
    setScreen("screen1");



  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");

//ORG-9100
  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Unified Gateway (01-10)")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Unified Gateway (01-11)")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

//CGS-9001
  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
           setText("Sol1", "=NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setText("Sol1", "=NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Unified Gateway (01-10)")) {
           setText("Sol1", "=NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setText("Sol1", "=NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Unified Gateway (01-11)")) {
           setText("Sol1", "=NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setText("Sol1", "=NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
   setScreen("screen3");


    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
   setScreen("screen3");
  

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
   setScreen("screen3");

  //CGS9002
  
  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
           setText("Sol1", " =NA");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
    setText("Sol1", "=NA");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Unified Gateway (01-10)")) {
           setText("Sol1", " =NA");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Unified Gateway (01-10)")) {
    setText("Sol1", "=NA");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Unified Gateway (01-11)")) {
           setText("Sol1", " =NA");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Unified Gateway (01-11)")) {
    setText("Sol1", "=NA");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen3");



//QP-983P
  } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setText("Sol1", "=NA");

  } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setText("Sol1", "=NA");

  } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setText("Sol1", "=NA");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setText("Sol1", "=NA");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen3");


   } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen3");


   } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen3");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen3");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen3");

  } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen3");


  } else if ((getText("dropdownQP983P") == "02-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen3");

//qp986p

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "CNS-6801")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "CNS-6801")) {
     setScreen("screen1");


   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");


//QP989P

   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");


   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");



   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");



   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");


   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
    setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
    setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
    setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
    setScreen("screen1");


//QP-991P
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
      setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
      setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setScreen("screen1");
 

//QP999P
   } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setText("Sol1", "NA");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setText("Sol1", "NA");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setText("Sol1", "NA");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setText("Sol1", "NA");
    } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setText("Sol1", "NA");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setText("Sol1", "NA");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
     setText("Sol1", "NA");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
     setText("Sol1", "NA");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
     setText("Sol1", "NA");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
     setText("Sol1", "NA");

//OLG-3800

   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Unified Gateway (01-08a)")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Unified Gateway (01-10)")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Unified Gateway (01-11)")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(01-02)")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(01-03)")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-01)")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-03)")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-04)")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(02-06)")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("dropdown6") == "Enterprise Gateway(04-01)")) {
       setScreen("screen1");







  } else if ((getText("dropdownGZ100P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");

  } else if ((getText("dropdownCSM1901") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
  } else if ((getText("drop_170") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
  } else if ((getText("dropdownCGS9002") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
  } else if ((getText("dropdownCNS6201") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownCNS6801") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownEDNS9001") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownqp999P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownqp991p") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownolg3800") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownRNS9703") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownRNS6804") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
   } else if ((getText("dropdownRNS6803") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
    } else if ((getText("dropdownQP989p") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
    } else if ((getText("dropdownQP988P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("dropdownQP983P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("dropdownQP-986P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware");
    } else if ((getText("dropdownORG9100") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("dropdownGZ100P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("dropdownCGS9001") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("dropdown3500") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("drop_1700") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("BSM-6000") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware"); 
    } else if ((getText("dropdownqp999P") == "" || getText("dropdown6") == "")) {
     setText("Sol1","Please Select a Firmware") ;
  } else {
    
  }
});
onEvent("dropdown6", "change", function(event) {
  console.log("Selected option: " + getText("dropdown6"));
});
onEvent("dropdown6", "change", function(event) {
  if (getText("dropdown6") == getText("direction_dropdown")) {
    hideElement("go_button");
   
  }
  if (getText("dropdown6") != getText("direction_dropdown")) {
    showElement("go_button");
  } else if ((getText("direction_dropdown") == getText("dropdown6"))) {
    hideElement("go_button");
  } else if ((getText("direction_dropdown") != getText("dropdown6"))) {
  } else if ((getText("direction_dropdown") == getText("dropdown6") || getText("dropdown6") == getText("direction_dropdown"))) {
    setText("Sol1","Please Select a Firmware") 
  } else {
    
  }
  console.log("Selected option: " + getText("dropdown6"));
});
onEvent("button3", "click", function(event) {
  console.log("button3 clicked!");
  setScreen("start_screen");
  setText("notearea", "");
  hideElement("notearea");
  
});
onEvent("direction_dropdown", "change", function(event) {
  //This is for checking if Product 1 = product 2 hide 
  console.log("Selected option: " + getText("direction_dropdown"));
  if (getText("dropdown6") == getText("direction_dropdown")) {
    hideElement("go_button");
    setText("Sol1", "Same Device")
  }
  if (getText("dropdown6") != getText("direction_dropdown")) {
    showElement("go_button");
    setText("Sol1"," ")
  } else if ((getText("direction_dropdown") == getText("dropdown6"))) {
    hideElement("go_button");
    setText("Sol1", "Same Device");
  } else if ((getText("direction_dropdown") != getText("dropdown6"))) {
    showElement("go_button");
    setText("Sol1"," ")
  } else {
    
  }
});

onEvent("dropdown6", "change", function(event) {
  console.log("Selected option: " + getText("dropdown6"));
  setText("Sol1", "")
});
onEvent("direction_dropdown", "change", function(event) {
  console.log("Selected option: " + getText("dropdown6"));
  setText("Sol1", "")
});

onEvent("Homebutton2", "click", function(event) {
  console.log("Homebutton2 clicked!");
  hideElement("notearea2");
  setText("notearea2", "");
  setText("direction_dropdown", " ");
  setText("dropdown6", " ");
  setText("Sol1","")
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9002");
    hideElement("dropdown3500");
    hideElement("BSM-6000");
    hideElement("dropdownCSM1901");
    hideElement("dropdownqp999P");
        setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
    setText("dropdownCGS9001","");
});
onEvent("Homebutton2", "click", function(event) {
  console.log("Homebutton2 clicked!");
});
onEvent("button3", "click", function(event) {
  console.log("button3 clicked!");
setText("direction_dropdown", " ");
setText("dropdown6", " ");
setText("Sol1","")
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
    hideElement("dropdownqp991p");
    hideElement("dropdownolg3800");
    hideElement("dropdownlist2");
    hideElement("dropdownRNS9703");
    hideElement("dropdownRNS6804");
    hideElement("dropdownRNS6803");
    hideElement("dropdownQP989p");
    hideElement("dropdownQP988P");
    hideElement("dropdownQP988");
    hideElement("dropdownQP983P");
    hideElement("dropdownQP-986P");
    hideElement("dropdownORG9100");
    hideElement("dropdownGZ100P");
    hideElement("dropdownCGS9002");
    hideElement("dropdown3500");
    hideElement("BSM-6000");
    hideElement("dropdownCSM1901");
    hideElement("dropdownqp999P");
    setText("dropdownCGS9002", " ");
    setText("dropdownCNS6201", "");
    setText("dropdownCNS6801","");
    setText("dropdownEDNS9001","");
    setText("dropdownqp999P","");
    setText("dropdownqp991p","");
    setText("dropdownolg3800","");
    setText("dropdownRNS9703","");
    setText("dropdownRNS6804","");
    setText("dropdownRNS6803","");
    setText("dropdownQP989p","");
    setText("dropdownQP988P","");
    setText("dropdownQP988","");
    setText("dropdownQP983P","");
    setText("dropdownQP-986P","");
    setText("dropdownORG9100","");
    setText("dropdownGZ100P","");
    setText("dropdownCGS9002","");
    setText("dropdown3500","");
    setText("BSM-6000","");
    setText("dropdownCSM1901","");
    setText("dropdownqp999P","");
    setText("drop_1700","");
     setText("dropdownCGS9001","");
});
