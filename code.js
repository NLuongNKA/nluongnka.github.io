
/*
The dropdown will give a list of options from which the user can 
  choose only one option. The device are seperate per notes
*/

/*
The code waits for the go button to get clicked and looks to see what option
  the user has selected in the dropdown menu. It displays a screen that the
  selected product leads to. 
*/


setScreen("selectionscreen");
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

onEvent("dropdown6", "change", function(event) {
  console.log("Selected option: " + getText("dropdown6"));

if ((getText("dropdown6") == "Unified Gateway")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    showElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    
} else if ((getText("dropdown6") == "EDNS-9001 Prefense (Legacy)")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    showElement("Pref");
    hideElement("UNG");
      setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("UNG","");   
    
} else if ((getText("dropdown6") == "CGS-9001 Pager Gateway (Legacy)")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    showElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pref","");
    setText("UNG","");   

} else if ((getText("dropdown6") == "CGS-9002 HL7 Gateway (Legacy)")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    showElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");   
    
} else if ((getText("dropdown6") == "QP-983P NetKonnect/RNS Server")) {
    hideElement("EG");
    hideElement("Host1000");
    showElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
      setText("EG", " ");
    setText("Host1000", "");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");
    
} else if ((getText("dropdown6") == "QP-986P HOST1000 Server")) {
    hideElement("EG");
    showElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");
    
    
} else if ((getText("dropdown6") == "Enterprise Gateway")) {
    showElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");
}
});
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
    showElement("dropdownQP988");    
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
    showElement("dropdownQP989p");    
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
} else if ((getText("direction_dropdown") == "EDNS-9001 Prefense (Legacy)")) {
    hideElement("dropdownQP989p");    
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
    showElement("dropdownqp991p");   
    hideElement("dropdownCSM1901");
    hideElement("drop_1700");
    hideElement("dropdownCGS9002");
    hideElement("dropdownCNS6201");
    hideElement("dropdownCNS6801");
    hideElement("dropdownEDNS9001");
    hideElement("dropdownqp999P");
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
    showElement("dropdownqp999P");
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
  if (getText("drop_1700") == "01-15" && getText("UNG") == "01-08a") {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("UNG") == "01-08a")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("UNG") == "01-08a")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("UNG") == "01-08a")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-61" && getText("UNG") == "01-08a")) {
    setScreen("screen2");
    
  } else if ((getText("drop_1700") == "01-15" && getText("UNG") == "01-10")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("UNG") == "01-10")) {
    setScreen("screen1"); 
  } else if ((getText("drop_1700") == "02-30" && getText("UNG") == "01-10")) {
  	setScreen("screen1"); 
  } else if ((getText("drop_1700") == "02-40" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-61" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");
  	

  } else if ((getText("drop_1700") == "01-15" && getText("UNG") == "01-11")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("UNG") == "01-11")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("UNG") == "01-11")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("UNG") == "01-11")) { 
  setScreen("screen2");
  
  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "01-02")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "01-02")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  	
  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "01-03")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "01-03")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "01-03")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "01-03")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-01")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-01")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-01")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-01")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-02")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-02")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-02")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-02")) { 
  setScreen("screen1");

  
  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-03")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-03")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-03")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-03")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-04")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-04")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-04")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-04")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-06")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-06")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-06")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-06")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "04-01")) {
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "04-01")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "04-01")) { 
     setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "04-01")) { 
  setScreen("screen1");

//Preface
  } else if ((getText("drop_1700") == "01-15" && getText("Pref") == "02-07")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("drop_1700") == "02-10" && getText("Pref") == "02-07")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("drop_1700") == "02-30" && getText("Pref") == "02-07")) { 
     setText("Sol1", "Not Applicable ");
  } else if ((getText("drop_1700") == "02-40" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");
   } else if ((getText("drop_1700") == "02-61" && getText("Pref") == "02-07")) { 
 setText("Sol1", "Not Applicable ");

 } else if ((getText("drop_1700") == "01-15" && getText("Pref") == "02-08")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("drop_1700") == "02-10" && getText("Pref") == "02-08")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("drop_1700") == "02-30" && getText("Pref") == "02-08")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("drop_1700") == "02-40" && getText("Pref") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");
   } else if ((getText("drop_1700") == "02-61" && getText("Pref") == "02-08")) { 
  setText("Sol1", "Not Applicable ");

//Pager


 } else if ((getText("drop_1700") == "01-15" && getText("Pager") == "02-03a")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("Pager") == "02-03a")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("Pager") == "02-03a")) { 
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("Pager") == "02-03a")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("Pager") == "02-03a")) { 
 setScreen("screen2");

 } else if ((getText("drop_1700") == "01-15" && getText("Pager") == "02-03b")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("Pager") == "02-03b")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("Pager") == "02-03b")) { 
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("Pager") == "02-03b")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("Pager") == "02-03b")) { 
 setScreen("screen2");

 } else if ((getText("drop_1700") == "01-15" && getText("Pager") == "02-03c")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("Pager") == "02-03c")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("Pager") == "02-03c")) { 
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("Pager") == "02-03c")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("Pager") == "02-03c")) { 
 setScreen("screen2");

 } else if ((getText("drop_1700") == "01-15" && getText("Pager") == "02-03d")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("Pager") == "02-03d")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("Pager") == "02-03d")) { 
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("Pager") == "02-03d")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("Pager") == "02-03d")) { 
 setScreen("screen2");

//HL7

 } else if ((getText("drop_1700") == "01-15" && getText("HL7") == "01-08a")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("HL7") == "01-08a")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("HL7") == "01-08a")) { 
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("HL7") == "01-08a")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("HL7") == "01-08a")) { 
 setScreen("screen2");

 } else if ((getText("drop_1700") == "01-15" && getText("HL7") == "01-09")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("HL7") == "01-09")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("HL7") == "01-09")) { 
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("HL7") == "01-09")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("HL7") == "01-09")) { 
 setScreen("screen2");

 } else if ((getText("drop_1700") == "01-15" && getText("HL7") == "01-09a")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("HL7") == "01-09a")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("HL7") == "01-09a")) { 
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("HL7") == "01-09a")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("HL7") == "01-09a")) { 
 setScreen("screen2");


//NetKonnect

 } else if ((getText("drop_1700") == "01-15" && getText("NetKonnect") == "02-10")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("NetKonnect") == "02-10")) {
  	setScreen("screen2");
  } else if ((getText("drop_1700") == "02-30" && getText("NetKonnect") == "02-10")) { 
    setScreen("screen2");
  } else if ((getText("drop_1700") == "02-40" && getText("NetKonnect") == "02-10")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("NetKonnect") == "02-10")) { 
 setScreen("screen2");

 } else if ((getText("drop_1700") == "01-15" && getText("NetKonnect") == "02-11")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("NetKonnect") == "02-11")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("NetKonnect") == "02-11")) { 
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("NetKonnect") == "02-11")) { 
  	setScreen("screen2");
   } else if ((getText("drop_1700") == "02-61" && getText("NetKonnect") == "02-11")) { 
 setScreen("screen2");

//Host1000
 } else if ((getText("drop_1700") == "01-15" && getText("Host1000") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("Host1000") == "01-03")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("Host1000") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("Host1000") == "01-03")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("Host1000") == "01-03")) { 
 setScreen("screen1");


 } else if ((getText("drop_1700") == "01-15" && getText("Host1000") == "01-04")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("Host1000") == "01-04")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("Host1000") == "01-04")) { 
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("Host1000") == "01-04")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("Host1000") == "01-04")) { 
 setScreen("screen1");


//BSM3500
  } else if ((getText("dropdown3500") == "06-31" && getText("UNG") == "01-08a")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("UNG") == "01-08a")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("UNG") == "01-08a")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("UNG") == "01-10")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("UNG") == "01-10")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("UNG") == "01-10")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("UNG") == "01-11")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("UNG") == "01-11")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("UNG") == "01-11")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "01-02")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "01-02")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "01-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "01-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "01-03")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "01-03")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "01-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-01")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-01")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-01")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-02")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-02")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-03")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-03")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-04")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-04")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-04")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-04")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-06")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-06")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-06")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-06")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "04-01")) {
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "04-01")) {
  	setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "04-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "04-01")) { 
  	setScreen("screen1");

//Pref
 } else if ((getText("dropdown3500") == "06-31" && getText("Pref") == "02-07")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdown3500") == "07-41" && getText("Pref") == "02-07")) {
  	   setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdown3500") == "08-11" && getText("Pref") == "02-07")) { 
       setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdown3500") == "08-31" && getText("Pref") == "02-07 ")) { 
  	   setText("Sol1", "Not Applicable ");

 } else if ((getText("dropdown3500") == "06-31" && getText("Pref") == "02-08")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdown3500") == "07-41" && getText("Pref") == "02-08")) {
  	   setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdown3500") == "08-11" && getText("Pref") == "02-08")) { 
       setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdown3500") == "08-31" && getText("Pref") == "02-08 ")) { 
  	   setText("Sol1", "Not Applicable ");



  } else if ((getText("dropdown3500") == "06-31" && getText("Pager") == "02-03a")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("Pager") == "02-03a")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("Pager") == "02-03a")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("Pager") == "02-03a")) { 
  	setScreen("screen2");


  } else if ((getText("dropdown3500") == "06-31" && getText("Pager") == "02-03b")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("Pager") == "02-03b")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("Pager") == "02-03b")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("Pager") == "02-03b")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("Pager") == "02-03c")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("Pager") == "02-03c")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("Pager") == "02-03c")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("Pager") == "02-03c")) { 
  	setScreen("screen2");


  } else if ((getText("dropdown3500") == "06-31" && getText("Pager") == "02-03d")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("Pager") == "02-03d")) {
  	setScreen("screen1");
  } else if ((getText("drpdown3500") == "08-11" && getText("Pager") == "02-03d")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("Pager") == "02-03d")) { 
  	setScreen("screen2");


  } else if ((getText("dropdown3500") == "06-31" && getText("HL7") == "01-08a")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("HL7") == "01-08a")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("HL7") == "01-08a")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("HL7") == "01-08a")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("HL7") == "01-09")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("HL7") == "01-09")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("HL7") == "01-09")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("HL7") == "01-09")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("HL7") == "01-09a")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("HL7") == "01-09a")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("HL7") == "01-09a")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("HL7") == "01-09a")) { 
  	setScreen("screen2");

//NetKonnect

  } else if ((getText("dropdown3500") == "06-31" && getText("NetKonnect") == "02-10")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("NetKonnect") == "02-10")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("NetKonnect") == "02-10")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("NetKonnect") == "02-10")) { 
  	setScreen("screen2");

  } else if ((getText("dropdown3500") == "06-31" && getText("NetKonnect") == "02-11")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("NetKonnect") == "02-11")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("NetKonnect") == "02-11")) { 
    setScreen("screen2");
  } else if ((getText("dropdown3500") == "08-31" && getText("NetKonnect") == "02-11")) { 
  	setScreen("screen2");

//Host1000
  } else if ((getText("dropdown3500") == "06-31" && getText("Host1000") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("Host1000") == "01-03")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("Host1000") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("Host1000") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("Host1000") == "01-04")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("Host1000") == "01-04")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("Host1000") == "01-04")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("Host1000") == "01-04")) { 
  	setScreen("screen1");


//BSM6000

  } else if ((getText("BSM-6000") == "07-02" && getText("UNG") == "01-08a")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("UNG") == "01-08a")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("UNG") == "01-08a")) { 
   setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");
   } else if ((getText("BSM-6000") == "08-31" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("UNG") == "01-10")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("UNG") == "01-10")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("UNG") == "01-10")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");
   } else if ((getText("BSM-6000") == "08-31" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");

  } else if ((getText("BSM-6000") == "07-02" && getText("UNG") == "01-11")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("UNG") == "01-11")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("UNG") == "01-11")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "01-02")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "01-02")) {
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "01-02")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "01-02")) { 
  	setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "01-03")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "01-03")) {
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "01-03")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "01-03")) { 
  	setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-01")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-01")) {
  setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-01")) { 
     setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-01")) { 
  setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-02")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-02")) {
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-02")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  
  
  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-03")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-03")) {
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-03")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-04")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-04")) {
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-04")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-04")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "04-01")) {
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "04-01")) {
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "04-01")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "04-01")) { 
  	setScreen("screen1");


//Pref_BSM6000
  } else if ((getText("BSM-6000") == "07-02" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "07-41" && getText("Pref") == "02-07")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-02" && getText("Pref") == "02-07")) { 
   setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-12" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-31" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");

  } else if ((getText("BSM-6000") == "07-02" && getText("Pref") == "02-08")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "07-41" && getText("Pref") == "02-08")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-02" && getText("Pref") == "02-08")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-12" && getText("Pref") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-31" && getText("Pref") == "02-08")) { 
  	  setText("Sol1", "Not Applicable ");


//Pager_BSM6000

  } else if ((getText("BSM-6000") == "07-02" && getText("Pager") == "02-03a")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("Pager") == "02-03a")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("Pager") == "02-03a")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("Pager") == "02-03a")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("Pager") == "02-03a")) { 
  	 setScreen("screen2");

  } else if ((getText("BSM-6000") == "07-02" && getText("Pager") == "02-03b")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("Pager") == "02-03b")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("Pager") == "02-03b")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("Pager") == "02-03b")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("Pager") == "02-03b")) { 
  	 setScreen("screen2");

  } else if ((getText("BSM-6000") == "07-02" && getText("Pager") == "02-03c")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("Pager") == "02-03c")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("Pager") == "02-03c")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("Pager") == "02-03c")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("Pager") == "02-03c")) { 
  	 setScreen("screen2");

  } else if ((getText("BSM-6000") == "07-02" && getText("Pager") == "02-03d")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("Pager") == "02-03d")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("Pager") == "02-03d")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("Pager") == "02-03d")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("Pager") == "02-03d")) { 
  	 setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("HL7") == "01-08a")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("HL7") == "01-08a")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("HL7") == "01-08a")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("HL7") == "01-08a")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("HL7") == "01-08a")) { 
  	 setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("HL7") == "01-09")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("HL7") == "01-09")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("HL7") == "01-09")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("HL7") == "01-09")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("HL7") == "01-09")) { 
  	 setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("HL7") == "01-09a")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("HL7") == "01-09a")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("HL7") == "01-09a")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("HL7") == "01-09a")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("HL7") == "01-09a")) { 
  	 setScreen("screen2");

//NEtkonnect_bsm-6000
  } else if ((getText("BSM-6000") == "07-02" && getText("NetKonnect") == "02-10")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("NetKonnect") == "02-10")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("NetKonnect") == "02-10")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("NetKonnect") == "02-10")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("NetKonnect") == "02-10")) { 
  	 setScreen("screen2");


  } else if ((getText("BSM-6000") == "07-02" && getText("NetKonnect") == "02-11")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("NetKonnect") == "02-11")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("NetKonnect") == "02-11")) { 
    setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-12" && getText("NetKonnect") == "02-11")) { 
  	 setScreen("screen2");
  } else if ((getText("BSM-6000") == "08-31" && getText("NetKonnect") == "02-11")) { 
  	 setScreen("screen2");


//Host1000_BSM6000
  } else if ((getText("BSM-6000") == "07-02" && getText("Host1000") == "01-03")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("Host1000") == "01-03")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("Host1000") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("Host1000") == "01-03")) { 
   setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("Host1000") == "01-03")) { 
   setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("Host1000") == "01-04")) {
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("Host1000") == "01-04")) {
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("Host1000") == "01-04")) { 
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("Host1000") == "01-04")) { 
  	 setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("Host1000") == "01-04")) { 
  	  setScreen("screen1");

//CSM1901



  } else if ((getText("dropdownCSM1901") == "01-21" && getText("UNG") == "01-08a")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("UNG") == "01-08a")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("UNG") == "01-08a")) { 
   setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("UNG") == "01-08a")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-28" && getText("UNG") == "01-08a")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-30" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("UNG") == "01-10")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("UNG") == "01-10")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("UNG") == "01-10")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("UNG") == "01-10")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-28" && getText("UNG") == "01-10")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("UNG") == "01-11")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("UNG") == "01-11")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("UNG") == "01-11")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("UNG") == "01-11")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("UNG") == "01-11")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "01-02")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "01-02")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "01-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "01-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "01-03")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "01-03")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "01-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-01")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-01")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-01")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-02")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-02")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-02")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-03")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-03")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-04")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-04")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-04")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-04")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-06")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-06")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-06")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-06")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "04-01")) {
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "04-01")) {
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "04-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "04-01")) { 
  	setScreen("screen1");


//Prefense_CSM1901
  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Pref") == "02-07")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Pref") == "02-07")) { 
   setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Pref") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Pref") == "02-08")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Pref") == "02-08")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Pref") == "02-08")) { 
   setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Pref") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Pref") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Pref") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Pref") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");

//Pager_CSM1901

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Pager") == "02-03a")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Pager") == "02-03a")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Pager") == "02-03a")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Pager") == "02-03a")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Pager") == "02-03a")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Pager") == "02-03a")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Pager") == "02-03a")) { 
  	 setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Pager") == "02-03b")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Pager") == "02-03b")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Pager") == "02-03b")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Pager") == "02-03b")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Pager") == "02-03b")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Pager") == "02-03b")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Pager") == "02-03b")) { 
  	 setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Pager") == "02-03c")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Pager") == "02-03c")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Pager") == "02-03c")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Pager") == "02-03c")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Pager") == "02-03c")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Pager") == "02-03c")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Pager") == "02-03c")) { 
  	 setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Pager") == "02-03d")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Pager") == "02-03d")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Pager") == "02-03d")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Pager") == "02-03d")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Pager") == "02-03d")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Pager") == "02-03d")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Pager") == "02-03d")) { 
  	 setScreen("screen2");

//HL7_CSM1901
  } else if ((getText("dropdownCSM1901") == "01-21" && getText("HL7") == "01-08a")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("HL7") == "01-08a")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("HL7") == "01-08a")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("HL7") == "01-08a")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("HL7") == "01-08a")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("HL7") == "01-08a")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("HL7") == "01-08a")) { 
  	 setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("HL7") == "01-09")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("HL7") == "01-09")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("HL7") == "01-09")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("HL7") == "01-09")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("HL7") == "01-09")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("HL7") == "01-09")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("HL7") == "01-09")) { 
  	 setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("HL7") == "01-09a")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("HL7") == "01-09a")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("HL7") == "01-09a")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("HL7") == "01-09a")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("HL7") == "01-09a")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("HL7") == "01-09a")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("HL7") == "01-09a")) { 
  	 setScreen("screen2");

//NetKonnect_CSM1901

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("NetKonnect") == "02-10")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("NetKonnect") == "02-10")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("NetKonnect") == "02-10")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("NetKonnect") == "02-10")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("NetKonnect") == "02-10")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("NetKonnect") == "02-10")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("NetKonnect") == "02-10")) { 
  	 setScreen("screen2");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("NetKonnect") == "02-11")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("NetKonnect") == "02-11")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("NetKonnect") == "02-11")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("NetKonnect") == "02-11")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("NetKonnect") == "02-11")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("NetKonnect") == "02-11")) { 
  	 setScreen("screen2");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("NetKonnect") == "02-11")) { 
  	 setScreen("screen2");

//Host1000_CSM1901

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Host1000") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Host1000") == "01-03")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Host1000") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Host1000") == "01-03")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Host1000") == "01-03")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Host1000") == "01-03")) { 
  	 setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Host1000") == "01-03")) { 
  	  setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("Host1000") == "01-04")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("Host1000") == "01-04")) {
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("Host1000") == "01-04")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("Host1000") == "01-04")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("Host1000") == "01-04")) { 
  	 setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("Host1000") == "01-04")) { 
  	 setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("Host1000") == "01-04")) { 
  	  setScreen("screen1");
 



//cns6201

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("UNG") == "01-08a")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("UNG") == "01-08a")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("UNG") == "01-08a")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("UNG") == "01-08a")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("UNG") == "01-08a")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");
 
  } else if ((getText("dropdownCNS6201") == "02-40" && getText("UNG") == "01-10")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("UNG") == "01-10")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("UNG") == "01-10")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("UNG") == "01-10")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("UNG") == "01-10")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("UNG") == "01-11")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("UNG") == "01-11")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("UNG") == "01-11")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("UNG") == "01-11")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("UNG") == "01-11")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "01-02")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "01-02")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "01-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "01-03")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "01-03")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "01-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-01")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-01")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-02")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-02")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-03")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-03")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-04")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-04")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-04")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-06")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-06")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-06")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "04-01")) {
     setScreen("screen2"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "04-01")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "04-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


//Pref_CNS6201
  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Pref") == "02-07")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Pref") == "02-07")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Pref") == "02-07")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Pref") == "02-07")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Pref") == "02-07")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Pref") == "02-07")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Pref") == "02-07")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Pref") == "02-08")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Pref") == "02-08")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Pref") == "02-08")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Pref") == "02-08")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Pref") == "02-08")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Pref") == "02-08")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Pref") == "02-08")) { 
  	setScreen("screen2");

//pager_cns6201
  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Pager") == "02-03a")) {
     setText("Sol1", "Not Applicable "); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Pager") == "02-03a")) {
  setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Pager") == "02-03a")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Pager") == "02-03a")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Pager") == "02-03a")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Pager") == "02-03a")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Pager") == "02-03a")) { 
  	setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Pager") == "02-03b")) {
     setText("Sol1", "Not Applicable "); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Pager") == "02-03b")) {
  setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Pager") == "02-03b")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Pager") == "02-03b")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Pager") == "02-03b")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Pager") == "02-03b")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Pager") == "02-03b")) { 
  	setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Pager") == "02-03c")) {
     setText("Sol1", "Not Applicable "); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Pager") == "02-03c")) {
  setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Pager") == "02-03c")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Pager") == "02-03c")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Pager") == "02-03c")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Pager") == "02-03c")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Pager") == "02-03c")) { 
  	setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Pager") == "02-03d")) {
     setText("Sol1", "Not Applicable "); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Pager") == "02-03d")) {
  setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Pager") == "02-03d")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Pager") == "02-03d")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Pager") == "02-03d")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Pager") == "02-03d")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Pager") == "02-03d")) { 
  	setText("Sol1", "Not Applicable ");

//HL7_CNS6201

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("HL7") == "01-08a")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("HL7") == "01-08a")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("HL7") == "01-08a")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("HL7") == "01-08a")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("HL7") == "01-08a")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("HL7") == "01-08a")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("HL7") == "01-08a")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("HL7") == "01-09")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("HL7") == "01-09")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("HL7") == "01-09")) { 
   setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("HL7") == "01-09")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("HL7") == "01-09")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("HL7") == "01-09")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("HL7") == "01-09")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("HL7") == "01-09a")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("HL7") == "01-09a")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("HL7") == "01-09a")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("HL7") == "01-09a")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("HL7") == "01-09a")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("HL7") == "01-09a")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("HL7") == "01-09a")) { 
  	setScreen("screen2");

//NetKonnect_CNS6201

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("NetKonnect") == "02-10")) {
     setText("Sol1", "Not Applicable "); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("NetKonnect") == "02-10")) {
  setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("NetKonnect") == "02-10")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("NetKonnect") == "02-10")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("NetKonnect") == "02-10")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("NetKonnect") == "02-10")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("NetKonnect") == "02-10")) { 
  	setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("NetKonnect") == "02-11")) {
     setText("Sol1", "Not Applicable "); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("NetKonnect") == "02-11")) {
  setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("NetKonnect") == "02-11")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("NetKonnect") == "02-11")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("NetKonnect") == "02-11")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("NetKonnect") == "02-11")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("NetKonnect") == "02-11")) { 
  	setText("Sol1", "Not Applicable ");

//Host1000_CNS6201

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Host1000") == "01-03")) {
   setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Host1000") == "01-03")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Host1000") == "01-03")) { 
   setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Host1000") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Host1000") == "01-03")) { 
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Host1000") == "01-03")) { 
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Host1000") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("Host1000") == "01-04")) {
   setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("Host1000") == "01-04")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("Host1000") == "01-04")) { 
   setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("Host1000") == "01-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("Host1000") == "01-04")) { 
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("Host1000") == "01-04")) { 
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("Host1000") == "01-04")) { 
  	setScreen("screen1");


//CNS6801
  } else if ((getText("dropdownCNS6801") == "02-01" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("UNG") == "01-08a")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("UNG") == "01-08a")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("UNG") == "01-08a")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("UNG") == "01-10")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("UNG") == "01-10")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("UNG") == "01-10")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("UNG") == "01-10")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("UNG") == "01-11")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("UNG") == "01-11")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("UNG") == "01-11")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("UNG") == "01-11")) { 
  	setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "01-02")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "01-02")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "01-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "01-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "01-03")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "01-03")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "01-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "01-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  	
  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-01")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-01")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-02")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-02")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-02")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-02")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-03")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-03")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-03")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-03")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-04")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-04")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-04")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-04")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  	


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-06")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-06")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-06")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-06")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "04-01")) {
     setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "04-01")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "04-01")) { 
    setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "04-01")) { 
  	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  	  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

//Pref_CNS6801

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pref") == "02-07")) {
  setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pref") == "02-07")) {
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pref") == "02-07")) { 
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pref") == "02-07")) { 
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pref") == "02-07")) { 
 setScreen("screen2");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pref") == "02-08")) {
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pref") == "02-08")) {
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pref") == "02-08")) { 
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pref") == "02-08")) { 
 setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pref") == "02-08")) { 
 setScreen("screen2");

//Pager_CNS6801


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pager") == "02-03a")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pager") == "02-03a")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pager") == "02-03a")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pager") == "02-03a")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pager") == "02-03a")) { 
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pager") == "02-03b")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pager") == "02-03b")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pager") == "02-03b")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pager") == "02-03b")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pager") == "02-03b")) { 
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pager") == "02-03c")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pager") == "02-03c")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pager") == "02-03c")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pager") == "02-03c")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pager") == "02-03c")) { 
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pager") == "02-03d")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pager") == "02-03d")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pager") == "02-03d")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pager") == "02-03d")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pager") == "02-03d")) { 
    setText("Sol1", "Not Applicable ");

//HL7_CNS6801

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("HL7") == "01-08a")) {
	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("HL7") == "01-08a")) {
	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("HL7") == "01-08a")) { 
	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("HL7") == "01-08a")) { 
	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("HL7") == "01-08a")) { 
    setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("HL7") == "01-09")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("HL7") == "01-09")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("HL7") == "01-09")) { 
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("HL7") == "01-09")) { 
	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("HL7") == "01-09")) { 
    setScreen("screen2");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("HL7") == "01-09a")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("HL7") == "01-09a")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("HL7") == "01-09a")) { 
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("HL7") == "01-09a")) { 
	setScreen("screen2");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("HL7") == "01-09a")) { 
    setScreen("screen2");

//NetKonnect_CNS6801

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("NetKonnect") == "02-10")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("NetKonnect") == "02-10")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("NetKonnect") == "02-10")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("NetKonnect") == "02-10")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("NetKonnect") == "02-10")) { 
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("NetKonnect") == "02-11")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("NetKonnect") == "02-11")) {
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("NetKonnect") == "02-11")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("NetKonnect") == "02-11")) { 
	setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("NetKonnect") == "02-11")) { 
    setText("Sol1", "Not Applicable ");

//Host1000_CNS6801

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Host1000") == "01-03")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Host1000") == "01-03")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Host1000") == "01-03")) { 
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Host1000") == "01-03")) { 
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Host1000") == "01-03")) { 
   setScreen("screen1");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Host1000") == "01-04")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Host1000") == "01-04")) {
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Host1000") == "01-04")) { 
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Host1000") == "01-04")) { 
	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Host1000") == "01-04")) { 
   setScreen("screen1");


   
//RNS9703

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("UNG") == "01-08a")) {
      setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("UNG") == "01-08a")) {
      setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("UNG") == "01-10")) {
      setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("UNG") == "01-10")) {
      setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("UNG") == "01-11")) {
      setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("UNG") == "01-11")) {
      setText("Sol1", "Not Applicable ");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "01-02")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "01-03")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-01")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-01")) {
    setScreen("screen1");
    
  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-02")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-03")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-03")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-04")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-04")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-06")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-06")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "04-01")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "04-01")) {
    setScreen("screen1");
    
 //Pref_RNS9703

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("Pref") == "02-07")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Pref") == "02-07")) {
   setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("Pref") == "02-08")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Pref") == "02-08")) {
   setText("Sol1", "Not Applicable ");

//Pager_RNS9703

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("Pager") == "02-03a")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Pager") == "02-03a")) {
   setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("Pager") == "02-03b")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Pager") == "02-03b")) {
   setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("Pager") == "02-03c")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Pager") == "02-03c")) {
   setText("Sol1", "Not Applicable ");
    
  } else if ((getText("dropdownRNS9703") == "03-40" && getText("Pager") == "02-03d")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Pager") == "02-03d")) {
   setText("Sol1", "Not Applicable ");

//HL7_RNS9703

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("HL7") == "01-08a")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("HL7") == "01-08a")) {
   setText("Sol1", "Not Applicable ");
    
      } else if ((getText("dropdownRNS9703") == "03-40" && getText("HL7") == "01-09")) {
        setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("HL7") == "01-09")) {
   setText("Sol1", "Not Applicable ");

//NetKonnnect_RNS9703

    } else if ((getText("dropdownRNS9703") == "03-40" && getText("NetKonnect") == "02-10")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("NetKonnect") == "02-10")) {
    setScreen("screen1");

      } else if ((getText("dropdownRNS9703") == "03-40" && getText("NetKonnect") == "02-11")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("NetKonnect") == "02-11")) {
    setScreen("screen1");

//Host1000_RNS9703

          } else if ((getText("dropdownRNS9703") == "03-40" && getText("Host1000") == "01-03")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Host1000") == "01-03")) {
    setScreen("screen1");

          } else if ((getText("dropdownRNS9703") == "03-40" && getText("Host1000") == "01-04")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("Host1000") == "01-04")) {
    setScreen("screen1");
    
//RNS6803


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("UNG") == "01-08a")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("UNG") == "01-08a")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("UNG") == "01-10")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("UNG") == "01-10")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("UNG") == "01-11")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("UNG") == "01-11")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "01-02")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "01-03")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-01")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-01")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-02")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-03")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-04")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-04")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-06")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-06")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "04-01")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "04-01")) {
    setScreen("screen1");



//Pref_RNS6803

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Pref") == "02-07")) {
         setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Pref") == "02-08")) {
         setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Pref") == "02-08")) {
    setText("Sol1", "Not Applicable ");

//Pager_RNS6803

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Pager") == "02-03a")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Pager") == "02-03a")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Pager") == "02-03b")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Pager") == "02-03b")) {
    setScreen("screen2");


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Pager") == "02-03c")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Pager") == "02-03c")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Pager") == "02-03d")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Pager") == "02-03d")) {
    setScreen("screen2");

//hl7_rns6803

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("HL7") == "01-08a")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("HL7") == "01-08a")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("HL7") == "01-09")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("HL7") == "01-09")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("HL7") == "01-09a")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("HL7") == "01-09a")) {
    setScreen("screen2");


//NetKonnect_rns6803


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("NetKonnect") == "02-10")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("NetKonnect") == "02-10")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("NetKonnect") == "02-11")) {
         setScreen("screen2");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("NetKonnect") == "02-11")) {
    setScreen("screen2");

//Host1000_Rns6803


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("Host1000") == "01-03")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("Host1000") == "01-04")) {
    setScreen("screen1");

//RNS6804


  } else if ((getText("dropdownRNS6804") == "02-10" && getText("UNG") == "01-08a")) {
         setScreen("screen2");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("UNG") == "01-10")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("UNG") == "01-11")) {
    setScreen("screen2");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "02-01")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "02-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "02-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "02-04")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "02-06")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("EG") == "04-01")) {
    setScreen("screen1");

//Pref_RNS6804
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Pref") == "02-08")) {
    setText("Sol1", "Not Applicable ");

//Pager_RNS6804

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Pager") == "02-03a")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Pager") == "02-03b")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Pager") == "02-03c")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Pager") == "02-03d")) {
    setText("Sol1", "Not Applicable ");

//hl7_rns6804

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("HL7") == "01-08a")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("HL7") == "01-09")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("HL7") == "01-09a")) {
    setText("Sol1", "Not Applicable ");

//Netkonnect_rns6804

  } else if ((getText("dropdownRNS6804") == "02-10" && getText("NetKonnect") == "02-10")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("NetKonnect") == "02-11")) {
    setText("Sol1", "Not Applicable ");

//Host1000_Rns6804
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Host1000") == "01-03")) {
     setScreen("screen1");
  } else if ((getText("dropdownRNS6804") == "02-10" && getText("Host1000") == "01-04")) {
     setScreen("screen1");

//EDNS-9001

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("UNG") == "01-08a")) {
          setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("UNG") == "01-08a")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("UNG") == "01-10")) {
          setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("UNG") == "01-10")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("UNG") == "01-11")) {
          setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("UNG") == "01-11")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "01-02")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "01-02")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "01-03")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "01-03")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "02-01")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "02-01")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "02-02")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "02-02")) {
  setScreen("screen3");


  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "02-03")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "02-03")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "02-04")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "02-04")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "02-06")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "02-06")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("EG") == "04-01")) {
           setScreen("screen3");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("EG") == "04-01")) {
  setScreen("screen3");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("Pager") == "02-03a")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("Pager") == "02-03a")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("Pager") == "02-03b")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("Pager") == "02-03b")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("Pager") == "02-03c")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("Pager") == "02-03c")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("Pager") == "02-03d")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("Pager") == "02-03d")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("HL7") == "01-08a")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("HL7") == "01-08a")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("HL7") == "01-09")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("HL7") == "01-09")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("HL7") == "01-09a")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("HL7") == "01-09a")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("NetKonnect") == "02-10")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("NetKonnect") == "02-10")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("NetKonnect") == "02-11")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("NetKonnect") == "02-11")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("Host1000") == "02-10")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("Host1000") == "02-10")) {
     setText("Sol1", "Not Applicable ");


  } else if ((getText("dropdownEDNS9001") == "02-07" && getText("Host1000") == "02-11")) {
              setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownEDNS9001") == "02-08" && getText("Host1000") == "02-11")) {
     setText("Sol1", "Not Applicable ");



//GZ-100P


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("UNG") == "01-08a")) {
            setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("UNG") == "01-08a")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("UNG") == "01-08a")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("UNG") == "01-08a")) {
     setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("UNG") == "01-10")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("UNG") == "01-10")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("UNG") == "01-10")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("UNG") == "01-10")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("UNG") == "01-11")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("UNG") == "01-11")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("UNG") == "01-11")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("UNG") == "01-11")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "01-02")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "01-02")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "01-02")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "01-03")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "01-03")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "01-03")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "01-03")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-01")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-01")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-01")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-01")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-02")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-02")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-02")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-02")) {
    setScreen("screen1");



  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-03")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-03")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-03")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-04")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-04")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-04")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-04")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-06")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-06")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-06")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-06")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "04-01")) {
              setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "04-01")) {
    setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "04-01")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "04-01")) {
    setScreen("screen1");


//Pref_GZ

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Pref") == "02-07")) {
             setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Pref") == "02-07")) {
   setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Pref") == "02-07")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Pref") == "02-08")) {
             setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Pref") == "02-08")) {
   setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Pref") == "02-08")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Pref") == "02-08")) {
    setText("Sol1", "Not Applicable ");

//pager_gZ
  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Pager") == "02-03a")) {
            setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Pager") == "02-03a")) {
   setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Pager") == "02-03a")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Pager") == "02-03a")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Pager") == "02-03b")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Pager") == "02-03b")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Pager") == "02-03b")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Pager") == "02-03b")) {
    setScreen("screen2");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Pager") == "02-03c")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Pager") == "02-03c")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Pager") == "02-03c")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Pager") == "02-03c")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Pager") == "02-03d")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Pager") == "02-03d")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Pager") == "02-03d")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Pager") == "02-03d")) {
    setScreen("screen2");

//HL7_GZ

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("HL7") == "01-08a")) {
            setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("HL7") == "01-08a")) {
   setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("HL7") == "01-08a")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("HL7") == "01-08a")) {
    setScreen("screen2");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("HL7") == "01-09")) {
            setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("HL7") == "01-09")) {
   setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("HL7") == "01-09")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("HL7") == "01-09")) {
    setScreen("screen2");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("HL7") == "01-09a")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("HL7") == "01-09a")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("HL7") == "01-09a")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("HL7") == "01-09a")) {
    setScreen("screen2");


//NetKonnect_GZ

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("NetKonnect") == "02-10")) {
            setScreen("screen2");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("NetKonnect") == "02-10")) {
   setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("NetKonnect") == "02-10")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("NetKonnect") == "02-10")) {
    setScreen("screen2");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("NetKonnect") == "02-11")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("NetKonnect") == "02-11")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("NetKonnect") == "02-11")) {
     setScreen("screen2");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("NetKonnect") == "02-11")) {
    setScreen("screen2");

//Host1000_GZ

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Host1000") == "01-03")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Host1000") == "01-03")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Host1000") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Host1000") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("Host1000") == "01-04")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("Host1000") == "01-04")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("Host1000") == "01-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("Host1000") == "01-04")) {
    setScreen("screen1");




//ORG-9100
  } else if ((getText("dropdownORG9100") == "04-01" && getText("UNG") == "01-08a")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("UNG") == "01-08a")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("UNG") == "01-08a")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("UNG") == "01-10")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("UNG") == "01-10")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("UNG") == "01-10")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("UNG") == "01-11")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("UNG") == "01-11")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("UNG") == "01-11")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "01-02")) {
       setScreen("screen2");
  showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "01-02")) {
     setScreen("screen2");
  showElement("notearea");
  setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "01-02")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "01-02")) {
     setScreen("screen1");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "01-03")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "01-03")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "01-03")) {
     setScreen("screen2");
  showElement("notearea");
 setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "01-03")) {
     setScreen("screen1");
  showElement("notearea");
 setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-01")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-01")) {
     setScreen("screen2");
  showElement("notearea");
 setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-01")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-01")) {
     setScreen("screen1");
  showElement("notearea");
  
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
 } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-02")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-02")) {
     setScreen("screen2");
  showElement("notearea");
 setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-02")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-02")) {
     setScreen("screen1");
  showElement("notearea");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-02")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-03")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-03")) {
     setScreen("screen2");
  showElement("notearea");
  setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-03")) {
     setScreen("screen1");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-04")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-04")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-04")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-04")) {
     setScreen("screen1");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-06")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-06")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-06")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-06")) {
     setScreen("screen1");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "04-01")) {
       setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "04-01")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "04-01")) {
     setScreen("screen2");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "04-01")) {
     setScreen("screen1");
  showElement("notearea");
setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


//Pref_ORG


  } else if ((getText("dropdownORG9100") == "04-01" && getText("Pref") == "02-07")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Pref") == "02-07")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Pref") == "02-07")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Pref") == "02-07")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("Pref") == "02-08")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Pref") == "02-08")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Pref") == "02-08")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Pref") == "02-08")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


//Pager_ORG

  } else if ((getText("dropdownORG9100") == "04-01" && getText("Pager") == "02-03a")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Pager") == "02-03a")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Pager") == "02-03a")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Pager") == "02-03a")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("Pager") == "02-03b")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Pager") == "02-03b")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Pager") == "02-03b")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Pager") == "02-03b")) {
     setScreen("screen2");



  } else if ((getText("dropdownORG9100") == "04-01" && getText("Pager") == "02-03c")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Pager") == "02-03c")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Pager") == "02-03c")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Pager") == "02-03c")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("Pager") == "02-03d")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Pager") == "02-03d")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Pager") == "02-03d")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Pager") == "02-03d")) {
     setScreen("screen2");

//hl7_org
  } else if ((getText("dropdownORG9100") == "04-01" && getText("HL7") == "01-08a")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("HL7") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("HL7") == "01-08a")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("HL7") == "01-08a")) {
     setScreen("screen2");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("HL7") == "01-09")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("HL7") == "01-09")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("HL7") == "01-09")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("HL7") == "01-09")) {
     setScreen("screen2");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("HL7") == "01-09a")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("HL7") == "01-09a")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("HL7") == "01-09a")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("HL7") == "01-09a")) {
     setScreen("screen2");

//NetKonnect_ORG


  } else if ((getText("dropdownORG9100") == "04-01" && getText("NetKonnect") == "02-10")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("NetKonnect") == "02-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("NetKonnect") == "02-10")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("NetKonnect") == "02-10")) {
     setScreen("screen2");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("NetKonnect") == "02-11")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("NetKonnect") == "02-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("NetKonnect") == "02-11")) {
     setScreen("screen2");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("NetKonnect") == "02-11")) {
     setScreen("screen2");

//Host1000_ORG


  } else if ((getText("dropdownORG9100") == "04-01" && getText("Host1000") == "01-03")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Host1000") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Host1000") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Host1000") == "01-03")) {
     setScreen("screen1");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("Host1000") == "01-04")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Host1000") == "01-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("Host1000") == "01-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Host1000") == "01-04")) {
     setScreen("screen1");



//CGS-9001
  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("UNG") == "01-08a")) {
           setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("UNG") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("UNG") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("UNG") == "01-08a")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("UNG") == "01-10")) {
           setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("UNG") == "01-10")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("UNG") == "01-10")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("UNG") == "01-10")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("UNG") == "01-11")) {
           setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("UNG") == "01-11")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("UNG") == "01-11")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("UNG") == "01-11")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "01-02")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "01-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "01-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "01-02")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "01-03")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "01-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "01-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "01-03")) {
   setScreen("screen3");


    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "02-01")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "02-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "02-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "02-01")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "02-02")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "02-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "02-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "02-02")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "02-03")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "02-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "02-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "02-03")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "02-04")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "02-04")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "02-04")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "02-04")) {
   setScreen("screen3");

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "02-06")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "02-06")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "02-06")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "02-06")) {
   setScreen("screen3");
  

    } else if ((getText("dropdownCGS9001") == "02-03a" && getText("EG") == "04-01")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("EG") == "04-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("EG") == "04-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("EG") == "04-01")) {
   setScreen("screen3");

  //CGS9002
  
  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("UNG") == "01-08a")) {
           setText("Sol1", " Not Applicable ");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("UNG") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("UNG") == "01-08a")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("UNG") == "01-10")) {
           setText("Sol1", " Not Applicable ");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("UNG") == "01-10")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("UNG") == "01-10")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("UNG") == "01-11")) {
           setText("Sol1", " Not Applicable ");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("UNG") == "01-11")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("UNG") == "01-11")) {
    setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "01-02")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "01-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "01-02")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "01-03")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "01-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "01-03")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "02-01")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "02-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "02-01")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "02-02")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "02-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "02-02")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "02-03")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "02-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "02-03")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "02-04")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "02-04")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "02-04")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "02-06")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "02-06")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "02-06")) {
    setScreen("screen3");

  } else if ((getText("dropdownCGS9002") == "01-08a" && getText("EG") == "04-01")) {
           setScreen("screen3");
  } else if ((getText("dropdownCGS9002") == "01-09" && getText("EG") == "04-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownCGS9002") == "01-09a" && getText("EG") == "04-01")) {
    setScreen("screen3");



//QP-983P
  } else if ((getText("dropdownQP983P") == "02-10" && getText("UNG") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("UNG") == "01-08a")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownQP983P") == "02-10" && getText("UNG") == "01-10")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("UNG") == "01-10")) {
     setText("Sol1", "Not Applicable ");

  } else if ((getText("dropdownQP983P") == "02-10" && getText("UNG") == "01-11")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("UNG") == "01-11")) {
     setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "01-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "01-02")) {
     setScreen("screen3");


   } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "01-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "01-03")) {
     setScreen("screen3");


   } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "02-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "02-01")) {
     setScreen("screen3");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "02-02")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "02-02")) {
     setScreen("screen3");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "02-03")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "02-03")) {
     setScreen("screen3");

   } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "02-04")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "02-04")) {
     setScreen("screen3");

  } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "02-06")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "02-06")) {
     setScreen("screen3");


  } else if ((getText("dropdownQP983P") == "02-10" && getText("EG") == "04-01")) {
     setScreen("screen3");
   } else if ((getText("dropdownQP983P") == "02-11" && getText("EG") == "04-01")) {
     setScreen("screen3");

//qp986p

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("UNG") == "01-08a")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("UNG") == "01-10")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("UNG") == "01-11")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "01-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "01-02")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "01-03")) {
     setScreen("screen1");


   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "02-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "02-01")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "02-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "02-02")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "02-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "02-03")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "02-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "02-04")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "02-06")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "02-06")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP-986P") == "01-03" && getText("EG") == "04-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP-986P") == "01-04" && getText("EG") == "04-01")) {
     setScreen("screen1");


//QP989P

   } else if ((getText("dropdownQP989p") == "01-08" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("UNG") == "01-08a")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("UNG") == "01-10")) {
     setScreen("screen1");


   } else if ((getText("dropdownQP989p") == "01-08" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("UNG") == "01-11")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "01-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "01-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "01-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "01-02")) {
     setScreen("screen1");



   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "01-03")) {
     setScreen("screen1");



   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "02-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "02-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "02-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "02-01")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "02-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "02-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "02-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "02-02")) {
     setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "02-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "02-03")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "02-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "02-03")) {
    setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "02-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "02-04")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "02-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "02-04")) {
    setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "02-06")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "02-06")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "02-06")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "02-06")) {
    setScreen("screen1");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("EG") == "04-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("EG") == "04-01")) {
    setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("EG") == "04-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("EG") == "04-01")) {
    setScreen("screen1");

//Pref_qp989


   } else if ((getText("dropdownQP989p") == "01-08" && getText("Pref") == "02-07")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Pref") == "02-07")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Pref") == "02-07")) {
    setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("Pref") == "02-08")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Pref") == "02-08")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Pref") == "02-08")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Pref") == "02-08")) {
    setText("Sol1", "Not Applicable ");

//Pager_QP989

   } else if ((getText("dropdownQP989p") == "01-08" && getText("Pager") == "02-03a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Pager") == "02-03a")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Pager") == "02-03a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Pager") == "02-03a")) {
    setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("Pager") == "02-03b")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Pager") == "02-03b")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Pager") == "02-03b")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Pager") == "02-03b")) {
    setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("Pager") == "02-03c")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Pager") == "02-03c")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Pager") == "02-03c")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Pager") == "02-03c")) {
    setText("Sol1", "Not Applicable ");


   } else if ((getText("dropdownQP989p") == "01-08" && getText("Pager") == "02-03d")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Pager") == "02-03d")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Pager") == "02-03d")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Pager") == "02-03d")) {
    setText("Sol1", "Not Applicable ");

//hl7_989p



   } else if ((getText("dropdownQP989p") == "01-08" && getText("HL7") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("HL7") == "01-08a")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("HL7") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("HL7") == "01-08a")) {
    setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("HL7") == "01-09")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("HL7") == "01-09")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("HL7") == "01-09")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("HL7") == "01-09")) {
    setText("Sol1", "Not Applicable ");


   } else if ((getText("dropdownQP989p") == "01-08" && getText("HL7") == "01-09a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("HL7") == "01-09a")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("HL7") == "01-09a")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("HL7") == "01-09a")) {
    setText("Sol1", "Not Applicable ");


//NetKonnect_QP989

   } else if ((getText("dropdownQP989p") == "01-08" && getText("NetKonnect") == "02-10")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("NetKonnect") == "02-10")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("NetKonnect") == "02-10")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("NetKonnect") == "02-10")) {
    setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("NetKonnect") == "02-11")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("NetKonnect") == "02-11")) {
    setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("NetKonnect") == "02-11")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("NetKonnect") == "02-11")) {
    setText("Sol1", "Not Applicable ");

//Host1000_qp989

   } else if ((getText("dropdownQP989p") == "01-08" && getText("Host1000") == "01-03")) {
        setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Host1000") == "01-03")) {
       setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Host1000") == "01-03")) {
        setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Host1000") == "01-03")) {
       setText("Sol1", "Not Applicable ");

   } else if ((getText("dropdownQP989p") == "01-08" && getText("Host1000") == "01-04")) {
        setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-10" && getText("Host1000") == "01-04")) {
      setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11" && getText("Host1000") == "01-04")) {
        setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownQP989p") == "01-11a" && getText("Host1000") == "01-04")) {
      setText("Sol1", "Not Applicable ");





//QP-991P
   } else if ((getText("dropdownqp991p") == "01-04" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "01-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "02-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "02-02")) {
      setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "02-03")) {
      setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "02-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "02-06")) {
      setScreen("screen1");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("EG") == "04-01")) {
     setScreen("screen1");
//Pref_991
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Pref") == "02-07")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Pref") == "02-08")) {
         setText("Sol1", "Not Applicable ");

//pager_991
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Pager") == "02-03a")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Pager") == "02-03b")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Pager") == "02-03c")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Pager") == "02-03d")) {
         setText("Sol1", "Not Applicable ");

//hl7_991
   } else if ((getText("dropdownqp991p") == "01-04" && getText("HL7") == "01-08a")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("HL7") == "01-09")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("HL7") == "01-09a")) {
         setText("Sol1", "Not Applicable ");

//NetKonnect_991
   } else if ((getText("dropdownqp991p") == "01-04" && getText("NetKonnect") == "01-03")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("NetKonnect") == "01-04")) {
         setText("Sol1", "Not Applicable ");

 //Host1000_991
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Host1000") == "01-03")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("Host1000") == "01-04")) {
         setText("Sol1", "Not Applicable ");


//QP999P
   } else if ((getText("dropdownqp999P") == "01-05" && getText("UNG") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("UNG") == "01-10")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("UNG") == "01-11")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "01-02")) {
     setText("Sol1", "Not Applicable ");
    } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "01-03")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "02-01")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "02-02")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "02-03")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "02-04")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "02-06")) {
     setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp999P") == "01-05" && getText("EG") == "04-01")) {
     setText("Sol1", "Not Applicable ");

//Pref_999
   } else if ((getText("dropdownqp999P") == "01-05" && getText("Pref") == "02-07")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Pref") == "02-08")) {
     setText("Sol1", "Not Applicable ");

//pager_999
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Pager") == "02-03a")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Pager") == "02-03b")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Pager") == "02-03c")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Pager") == "02-03d")) {
     setText("Sol1", "Not Applicable ");

//hl7_999
  } else if ((getText("dropdownqp999P") == "01-05" && getText("HL7") == "01-08a")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("HL7") == "01-09")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("HL7") == "01-09a")) {
     setText("Sol1", "Not Applicable ");

//NetKonnect_999
  } else if ((getText("dropdownqp999P") == "01-05" && getText("NetKonnect") == "02-10")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("NetKonnect") == "02-11")) {
     setText("Sol1", "Not Applicable ");

//Host1000_999
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Host1000") == "01-03")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("dropdownqp999P") == "01-05" && getText("Host1000") == "01-04")) {
     setText("Sol1", "Not Applicable ");



//OLG-3800

   } else if ((getText("dropdownolg3800") == "01-03" && getText("UNG") == "01-08a")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("UNG") == "01-10")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("UNG") == "01-11")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "01-02")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "02-01")) {
     setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "02-02")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "02-03")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "02-04")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "02-06")) {
      setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("EG") == "04-01")) {
       setScreen("screen1");
//Pref_OLG
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Pref") == "02-07")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Pref") == "02-08")) {
       setScreen("screen1");
//Pager_OLG
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Pager") == "02-03a")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Pager") == "02-03b")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Pager") == "02-03c")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Pager") == "02-03d")) {
       setScreen("screen1");
//hl7_olg
   } else if ((getText("dropdownolg3800") == "01-03" && getText("HL7") == "01-08a")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("HL7") == "01-09")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("HL7") == "01-09a")) {
       setScreen("screen1");
//NetKonnect_OLG
   } else if ((getText("dropdownolg3800") == "01-03" && getText("NetKonnect") == "02-10")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("NetKonnect") == "02-11")) {
       setScreen("screen1");
//Host1000_olg

   } else if ((getText("dropdownolg3800") == "01-03" && getText("Host1000") == "01-03")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("Host1000") == "01-04")) {
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
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");

});
onEvent("Homebutton2", "click", function(event) {
  console.log("Homebutton2 clicked!");
});
onEvent("button3", "click", function(event) {
  console.log("button3 clicked!");
setText("direction_dropdown", " ");
setText("dropdown6", " ");
setText("Sol1","")
   hideElement("UNG");
   hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
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
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");

});
onEvent("button1", "click", function(event) {
  console.log("button1 clicked!");
  setScreen("start_screen");
setText("direction_dropdown", " ");
setText("dropdown6", " ");
setText("Sol1","")
   hideElement("UNG");
   hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
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
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");

});
onEvent("Sol1", "change", function(event) {
  console.log("Sol1 entered text: " + getText("Sol1"));
});
onEvent("dropdown6", "change", function(event) {
  console.log("Selected option: " + getText("dropdown6"));
  
if ((getText("dropdown6") == "Unified Gateway")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    showElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    
} else if ((getText("dropdown6") == "EDNS-9001 Prefense (Legacy)")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    showElement("Pref");
    hideElement("UNG");
      setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("UNG","");   
    
} else if ((getText("dropdown6") == "CGS-9001 Pager Gateway (Legacy)")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    showElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pref","");
    setText("UNG","");   

} else if ((getText("dropdown6") == "CGS-9002 HL7 Gateway")) {
    hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    showElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");   
    
} else if ((getText("dropdown6") == "QP-986P NetKonnect/RNS Server")) {
    hideElement("EG");
    hideElement("Host1000");
    showElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
      setText("EG", " ");
    setText("Host1000", "");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");
    
} else if ((getText("dropdown6") == "QP-986P Host1000 Server")) {
    hideElement("EG");
    showElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
      setText("EG", " ");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");
    
    
} else if ((getText("dropdown6") == "Enterprise Gateway")) {
    showElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
    hideElement("UNG");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");
}
});
onEvent("button2", "click", function(event) {
  console.log("button2 clicked!");
  setScreen("start_screen");
  
});
onEvent("backbutton1", "click", function(event) {
  console.log("backbutton1 clicked!");
});
onEvent("backbutton1", "click", function(event) {
  console.log("backbutton1 clicked!");
  setScreen("selectionscreen");
  
});




///////////////////////
////////////////////////////////////////////
////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Second app

onEvent("button4", "click", function(event) {
  console.log("button4 clicked!");
  setScreen("start_screen2")
});
onEvent("button6", "click", function(event) {
  console.log("button6 clicked!");
   setScreen("selectionscreen");
});
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
setText("direction_drop6", "");
setText("drop", "");

if (getText("drop") == getText("direction_drop6")) {
  hideElement("go");
  
}
if (getText("drop") != getText("direction_drop6")) {
  showElement("go");
}
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
    setText("dropdownCGS9001","");
hideElement("3500");
hideElement("go");
hideElement("6000");
hideElement("1700");
//Change of firmware for each products
onEvent("direction_drop6", "click", function(event) {
  if (getText("direction_drop6") == "BSM-1700 (+UG/TS)") {
    showElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("CGS9002");
    hideElement("3500");
    hideElement("6000");
    hideElement("CSM1901");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");

  } else if ((getText("direction_drop6") == "BSM-3500")) {
    showElement("3500");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("CGS9002");
    hideElement("1700");
    hideElement("CSM1901");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
  } else if ((getText("direction_drop6") == "BSM-6000")) {
    showElement("6000");
    hideElement("1700");
    hideElement("BSM-3500");
    showElement("6000");
    hideElement("RNS6803");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("CGS9002");
    hideElement("3500");
    hideElement("1700");
    hideElement("CSM1901");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
  } else if ((getText("direction_drop6") == getText("drop"))) {
    hideElement("go");
  } else if ((getText("direction_drop6") == "CSM-1901")) {
    showElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
  } else if ((getText("direction_drop6") == "CNS-6201")) {
    showElement("CNS6201");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
 } else if ((getText("direction_drop6") == "CNS-6801")) {
    showElement("CNS6801");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    showElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "RNS-9703(Old GUI)")) {
    showElement("RNS9703");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "RNS-6803(Audio)")) {
    showElement("RNS6803");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "RNS-6804(No Audio)")) {
    showElement("RNS6804");    
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "EDNS-9001 Prefense")) {
    showElement("EDNS9001");  
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "GZ-100P (+UG/TS)")) {
    showElement("GZ100P");    
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "ORG-9100")) {
    showElement("ORG9100");   
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "CGS-9001 Pager Gateway (Legacy)")) {
    showElement("dropdownCGS9001");    
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");

} else if ((getText("direction_drop6") == "CGS-9002 HL7 Gateway (Legacy)")) {
    showElement("CGS9002");    
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-983P NetKonnect/RNS Server")) {
    showElement("QP983P");    
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-986P Host1000 Server")) {
    showElement("QP-986P");   
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-988P Unified Gateway")) {
    showElement("QP988P");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-988P Enterprise Gateway")) {
    showElement("QP988");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-989P ViTrac iOS")) {
    showElement("QP989p");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-991P ViTrac Android")) {
    showElement("qp991p");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
} else if ((getText("direction_drop6") == "QP-999P NKAnywhere")) {
    showElement("qp999P")
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("1700","");

} else if ((getText("direction_drop6") == "OLG-3800")) {
    showElement("olg3800");
    hideElement("CSM1901");
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("dropdownCGS9001");
    hideElement("3500");
    hideElement("1700");
    hideElement("6000");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");




  } else {
    
  }
});
onEvent("Homebutton2", "click", function(event) {
  console.log("Homebutton2 clicked!");
  setScreen("start_screen");
});

onEvent("go", "click", function(event) {
  console.log("go clicked!");

  //To check if ready for 1700 
  if (getText("1700") == "01-15" && getText("drop") == "BSM-3500") {
    setScreen("screen4");
    
  } else if ((getText("1700") == "02-10" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-61" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");


  } else if ((getText("1700") == "01-15" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "BSM-6000")) {
  	setScreen("screen4"); 
  } else if ((getText("1700") == "02-40" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("1700") == "02-61" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "CSM-1901")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "CSM-1901")) { 
     setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "CSM-1901")) { 
  setScreen("screen4");

  } else if ((getText("1700") == "01-15" && getText("drop") == "CNS-6201")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "CNS-6201")) {
  	setText("Solu", "≧05-01");
  } else if ((getText("1700") == "02-30" && getText("drop") == "CNS-6201")) { 
  	setText("Solu", "≧05-01");
  } else if ((getText("1700") == "02-40" && getText("drop") == "CNS-6201")) { 
  	setText("Solu", "≧05-01");
   } else if ((getText("1700") == "02-61" && getText("drop") == "CNS-6201")) { 
  	setText("Solu", "≧05-01");
  } else if ((getText("1700") == "01-15" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "CNS-6801")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "CNS-6801")) { 
     setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "CNS-6801")) { 
  setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "RNS-9703(Old GUI)")) {
  	setText("Solu", "≧03-40b");
  } else if ((getText("1700") == "02-30" && getText("drop") == "RNS-9703(Old GUI)")) { 
     setText("Solu", "≧03-40b");
  } else if ((getText("1700") == "02-40" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setText("Solu", "≧03-40b");
   } else if ((getText("1700") == "02-61" && getText("drop") == "RNS-9703(Old GUI)")) { 
  setText("Solu", "≧03-40b");
  } else if ((getText("1700") == "01-15" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "RNS-6803(Audio)")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "RNS-6803(Audio)")) { 
     setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "RNS-6803(Audio)")) { 
  setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "RNS-6804(No Audio)")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "RNS-6804(No Audio)")) { 
     setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
  } else if ((getText("1700") == "02-10" && getText("drop") == "EDNS-9001 Prefense")) {
  	setText("Solu", "NA");
  } else if ((getText("1700") == "02-30" && getText("drop") == "EDNS-9001 Prefense")) { 
     setText("Solu", "NA");
  } else if ((getText("1700") == "02-40" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setText("Solu", "NA");
   } else if ((getText("1700") == "02-61" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setText("Solu", "NA");
   } else if ((getText("1700") == "01-15" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "NA");
  } else if ((getText("1700") == "02-10" && getText("drop") == "GZ-100P (+UG/TS)")) {
  	setText("Solu", "NA");
  } else if ((getText("1700") == "02-30" && getText("drop") == "GZ-100P (+UG/TS)")) { 
     setText("Solu", "NA");
  } else if ((getText("1700") == "02-40" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setText("Solu", "NA");
   } else if ((getText("1700") == "02-61" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  setText("Solu", "NA");
   } else if ((getText("1700") == "01-15" && getText("drop") == "ORG-9100")) {
    setText("Solu", "NA");
  } else if ((getText("1700") == "02-10" && getText("drop") == "ORG-9100")) {
  	setText("Solu", "NA");
  } else if ((getText("1700") == "02-30" && getText("drop") == "ORG-9100")) { 
     setText("Solu", "NA");
  } else if ((getText("1700") == "02-40" && getText("drop") == "ORG-9100")) { 
  	setText("Solu", "NA");
   } else if ((getText("1700") == "02-61" && getText("drop") == "ORG-9100")) { 
  setText("Solu", "NA");
  } else if ((getText("1700") == "01-15" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
  	setText("Solu", "≧02-03b");
  } else if ((getText("1700") == "02-30" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
    setText("Solu", "≧02-03b");
  } else if ((getText("1700") == "02-40" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	 setScreen("screen6");
   } else if ((getText("1700") == "02-61" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setScreen("screen6");
  } else if ((getText("1700") == "01-15" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
  	setText("Solu", "≧01-09a");
  } else if ((getText("1700") == "02-30" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
    setText("Solu", "≧01-09a");
  } else if ((getText("1700") == "02-40" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen6");
   } else if ((getText("1700") == "02-61" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen6");
  } else if ((getText("1700") == "01-15" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
  	setText("Solu", "≧02-11");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
    setText("Solu", "≧02-11");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setScreen("screen6");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setScreen("screen6");
  } else if ((getText("1700") == "01-15" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-986P Host1000 Server")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-986P Host1000 Server")) { 
    setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "01-15" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≦01-08a");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-988P Unified Gateway")) {
  	setText("Solu", "≧01-10 and ≦01-11");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-988P Unified Gateway")) { 
    setText("Solu", "≧01-10 and ≦01-11");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");
  } else if ((getText("1700") == "01-15" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setScreen("screen6");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-988P Enterprise Gateway")) {
  	setScreen("screen6");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-988P Enterprise Gateway")) { 
    setScreen("screen6");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	 setText("Solu", "≧02-06");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setText("Solu", "≧02-06");
  } else if ((getText("1700") == "01-15" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-989P ViTrac iOS")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-989P ViTrac iOS")) { 
    setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-991P ViTrac Android")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-991P ViTrac Android")) { 
    setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");
  } else if ((getText("1700") == "02-10" && getText("drop") == "QP-999P NKAnywhere")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "QP-999P NKAnywhere")) { 
    setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");
  } else if ((getText("1700") == "01-15" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
  } else if ((getText("1700") == "02-10" && getText("drop") == "OLG-3800")) {
  	setScreen("screen4");
  } else if ((getText("1700") == "02-30" && getText("drop") == "OLG-3800")) { 
    setScreen("screen4");
  } else if ((getText("1700") == "02-40" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
   } else if ((getText("1700") == "02-61" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");



  } else if ((getText("3500") == "06-31" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "BSM-6000")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "BSM-6000")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "CSM-1901")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "CSM-1901")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "CNS-6201")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "CNS-6201")) {
  	 setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "CNS-6201")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");



  } else if ((getText("3500") == "06-31" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "CNS-6801")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "CNS-6801")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "RNS-9703(Old GUI)")) { 
     setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	  setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "RNS-6803(Audio)")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "RNS-6803(Audio)")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "RNS-6804(No Audio)")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "RNS-6804(No Audio)")) { 
    setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
  } else if ((getText("3500") == "07-41" && getText("drop") == "EDNS-9001 Prefense")) {
  	setText("Solu", "NA");
  } else if ((getText("3500") == "08-11" && getText("drop") == "EDNS-9001 Prefense")) { 
    setText("Solu", "NA");
  } else if ((getText("3500") == "08-31" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setText("Solu", "NA");

  } else if ((getText("3500") == "06-31" && getText("drop") == "GZ-100P (+UG/TS)")) {
      setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "GZ-100P (+UG/TS)")) {
  	  setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "GZ-100P (+UG/TS)")) { 
     setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	  setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "ORG-9100")) {
  	  setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "ORG-9100")) { 
      setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "ORG-9100")) { 
  	  setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
      setScreen("screen6");
  } else if ((getText("3500") == "08-31" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	  setScreen("screen6");


  } else if ((getText("3500") == "06-31" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
  	  setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
      setScreen("screen6");
  } else if ((getText("3500") == "08-31" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen6");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
  	  setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
      setScreen("screen6");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	 setScreen("screen6");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-986P Host1000 Server")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-986P Host1000 Server")) { 
   setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-988P Unified Gateway")) {
   setText("Solu", "≦01-11");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-988P Unified Gateway")) {
  	setText("Solu", "≦01-11");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-988P Unified Gateway")) { 
  setScreen("screen6");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-988P Unified Gateway")) { 
   setScreen("screen6");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setScreen("screen6");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-988P Enterprise Gateway")) {
  	setScreen("screen6");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-988P Enterprise Gateway")) { 
 setText("Solu", "≧02-06");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setText("Solu", "≧02-06");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-989P ViTrac iOS")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-989P ViTrac iOS")) { 
   setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-991P ViTrac Android")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-991P ViTrac Android")) { 
   setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");
  } else if ((getText("3500") == "07-41" && getText("drop") == "QP-999P NKAnywhere")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "QP-999P NKAnywhere")) { 
   setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");

  } else if ((getText("3500") == "06-31" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
  } else if ((getText("3500") == "07-41" && getText("drop") == "OLG-3800")) {
  	setScreen("screen4");
  } else if ((getText("3500") == "08-11" && getText("drop") == "OLG-3800")) { 
   setScreen("screen4");
  } else if ((getText("3500") == "08-31" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
   setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
   } else if ((getText("6000") == "08-31" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");


  } else if ((getText("6000") == "07-02" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "BSM-3500")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "BSM-3500")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
   } else if ((getText("6000") == "08-31" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "CSM-1901")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "CSM-1901")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");


  } else if ((getText("6000") == "07-02" && getText("drop") == "CNS-6201")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "CNS-6201")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "CNS-6201")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");


  } else if ((getText("6000") == "07-02" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "CNS-6801")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "CNS-6801")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");


  } else if ((getText("6000") == "07-02" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "RNS-9703(Old GUI)")) {
  setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "RNS-9703(Old GUI)")) { 
     setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "RNS-9703(Old GUI)")) { 
  setScreen("screen4");
  
  
  } else if ((getText("6000") == "07-02" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "RNS-6803(Audio)")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "RNS-6803(Audio)")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "RNS-6804(No Audio)")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "RNS-6804(No Audio)")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");


  } else if ((getText("6000") == "07-02" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
  } else if ((getText("6000") == "07-41" && getText("drop") == "EDNS-9001 Prefense")) {
  	setText("Solu", "NA");
  } else if ((getText("6000") == "08-02" && getText("drop") == "EDNS-9001 Prefense")) { 
    setText("Solu", "NA");
  } else if ((getText("6000") == "08-12" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setText("Solu", "NA");
  } else if ((getText("6000") == "08-31" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setText("Solu", "NA");

  } else if ((getText("6000") == "07-02" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "GZ-100P (+UG/TS)")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "GZ-100P (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "ORG-9100")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "ORG-9100")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "ORG-9100")) { 
    setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
    setScreen("screen6");
  setScreen("screen6");
  } else if ((getText("6000") == "08-12" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	  setScreen("screen6");
  } else if ((getText("6000") == "08-31" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  setScreen("screen6");

  } else if ((getText("6000") == "07-02" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
   setScreen("screen6");
  } else if ((getText("6000") == "08-12" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	  setScreen("screen6");
  } else if ((getText("6000") == "08-31" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  setScreen("screen6");


  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
      setScreen("screen6");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	  setScreen("screen6");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	  setScreen("screen6");


  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-986P Host1000 Server")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-986P Host1000 Server")) { 
   setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-988P Unified Gateway")) {
 setText("Solu", "≦01-11 ");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-988P Unified Gateway")) {
   setText("Solu", "≦01-11");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-988P Unified Gateway")) { 
  setScreen("screen6");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");

  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-988P Enterprise Gateway")) {
   setScreen("screen6");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-988P Enterprise Gateway")) {
  	setScreen("screen6");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-988P Enterprise Gateway")) { 
     setText("Solu", "≧02-06");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	   setText("Solu", "≧02-06  ");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-988P Enterprise Gateway")) { 
     setText("Solu", "≧02-06");

  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-989P ViTrac iOS")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-989P ViTrac iOS")) { 
   setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-991P ViTrac Android")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-991P ViTrac Android")) { 
   setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");
  } else if ((getText("6000") == "07-41" && getText("drop") == "QP-999P NKAnywhere")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "QP-999P NKAnywhere")) { 
   setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");

  } else if ((getText("6000") == "07-02" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
  } else if ((getText("6000") == "07-41" && getText("drop") == "OLG-3800")) {
  	setScreen("screen4");
  } else if ((getText("6000") == "08-02" && getText("drop") == "OLG-3800")) { 
   setScreen("screen4");
  } else if ((getText("6000") == "08-12" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("6000") == "08-31" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");


  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
   setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-28" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-30" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");


  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "BSM-3500")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "BSM-3500")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-28" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "BSM-6000")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "BSM-6000")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");


  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "CNS-6201")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "CNS-6201")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "CNS-6201")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "CNS-6201")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "CNS-6801")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "CNS-6801")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "RNS-9703(Old GUI)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "RNS-9703(Old GUI)")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "RNS-6803(Audio)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "RNS-6803(Audio)")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "RNS-6804(No Audio)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "RNS-6804(No Audio)")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "EDNS-9001 Prefense")) {
  setText("Solu", "NA");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "EDNS-9001 Prefense")) { 
     setText("Solu", "NA");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "EDNS-9001 Prefense")) { 
  setText("Solu", "NA");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "EDNS-9001 Prefense")) { 
  setText("Solu", "NA");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "EDNS-9001 Prefense")) { 
  setText("Solu", "NA");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "EDNS-9001 Prefense")) { 
    setText("Solu", "NA");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "GZ-100P (+UG/TS)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "GZ-100P (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "ORG-9100")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "ORG-9100")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "ORG-9100")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setScreen("screen6");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setScreen("screen6");



  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen6");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setScreen("screen6");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setScreen("screen6");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setScreen("screen6");


  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-986P Host1000 Server")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-986P Host1000 Server")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≦01-11,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-988P Unified Gateway")) {
  	setText("Solu", "≦01-11,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-988P Unified Gateway")) { 
  setText("Solu", "≦01-11,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setText("Solu", "≦01-11,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-988P Unified Gateway")) { 
  setText("Solu", "≦01-11,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setScreen("screen6");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-988P Enterprise Gateway")) {
  	setScreen("screen6");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-988P Enterprise Gateway")) { 
 setScreen("screen6");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setScreen("screen6");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-988P Enterprise Gateway")) { 
 setScreen("screen6");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setText("Solu", "≧02-06,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setText("Solu", "≧02-06,Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");



  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-989P ViTrac iOS")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-989P ViTrac iOS")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-991P ViTrac Android")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-991P ViTrac Android")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "QP-999P NKAnywhere")) {
  	setScreen("screen6");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "QP-999P NKAnywhere")) { 
    setScreen("screen6");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen4");

  } else if ((getText("CSM1901") == "01-21" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-23" && getText("drop") == "OLG-3800")) {
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-26" && getText("drop") == "OLG-3800")) { 
    setScreen("screen4");
  } else if ((getText("CSM1901") == "01-27" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-28" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("CSM1901") == "01-30" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
   } else if ((getText("CSM1901") == "01-32" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");

//CNS6201
  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "=01-15");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  setText("Solu", "=01-15");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "BSM-3500")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "BSM-3500")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "BSM-6000")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "BSM-6000")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "CSM-1901")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "CSM-1901")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "CNS-6801")) {
     setScreen("screen6");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "CNS-6801")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "CNS-6801")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "CNS-6801")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "RNS-9703(Old GUI)")) {
  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "RNS-9703(Old GUI)")) { 
    setScreen("screen6");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "RNS-9703(Old GUI)")) { 
  	setScreen("screen6");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen6");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "RNS-6803(Audio)")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "RNS-6803(Audio)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen6");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "RNS-6804(No Audio)")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "RNS-6804(No Audio)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "EDNS-9001 Prefense")) {
  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "EDNS-9001 Prefense")) { 
    setScreen("screen6");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "EDNS-9001 Prefense")) { 
  	setScreen("screen6");
  

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen6");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "GZ-100P (+UG/TS)")) {
  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "GZ-100P (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "ORG-9100")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "ORG-9100")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
   setText("Solu", "NA");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
   setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
    setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
    	setScreen("screen6");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
   setText("Solu", "NA");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
    setText("Solu", "≧01-09");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setText("Solu", "≧01-09");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	setText("Solu", "≧01-09");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	  setScreen("screen6");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
   setText("Solu", "NA");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
   setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
    setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	setText("Solu", "NA");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	  setScreen("screen6");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-986P Host1000 Server")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-986P Host1000 Server")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-988P Unified Gateway")) {
  setText("Solu", "≦01-11");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-988P Unified Gateway")) {
   setText("Solu", "≦01-11");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-988P Unified Gateway")) { 
 setText("Solu", "≦01-11");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-988P Unified Gateway")) { 
  setText("Solu", "≦01-11");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-988P Unified Gateway")) { 
   setText("Solu", "≦01-11");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-988P Unified Gateway")) { 
setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen6");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-988P Enterprise Gateway")) {
  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-988P Enterprise Gateway")) { 
    setScreen("screen6");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	 setText("Solu", "≧02-06, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-988P Enterprise Gateway")) { 
   setText("Solu", "≧04-01, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-989P ViTrac iOS")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-989P ViTrac iOS")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-989P ViTrac iOS")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-991P ViTrac Android")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-991P ViTrac Android")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "QP-999P NKAnywhere")) {
     setScreen("screen6");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "QP-999P NKAnywhere")) {
  setScreen("screen6");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "QP-999P NKAnywhere")) { 
    setScreen("screen6");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen6");

  } else if ((getText("CNS6201") == "02-40" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
  } else if ((getText("CNS6201") == "03-40" && getText("drop") == "OLG-3800")) {
  setScreen("screen4");
  } else if ((getText("CNS6201") == "05-01" && getText("drop") == "OLG-3800")) { 
    setScreen("screen4");
  } else if ((getText("CNS6201") == "05-07" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-08" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-10" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6201") == "05-13" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  	
//cns6801

  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "BSM-1700 (+UG/TS)")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "BSM-3500")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "BSM-3500")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "BSM-3500")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "BSM-6000")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "BSM-6000")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "BSM-6000")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "CSM-1901")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "CSM-1901")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "CSM-1901")) { 
  	setScreen("screen4");
  

  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "CNS-6201")) {
      setText("Solu", "≧03-40");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "CNS-6201")) {
  setText("Solu", "≧03-40");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "CNS-6201")) { 
    setText("Solu", "≧03-40");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "CNS-6201")) { 
  	setText("Solu", "≧03-40");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "CNS-6201")) { 
  	setText("Solu", "≧03-40");

  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen6");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "RNS-9703(Old GUI)")) {
setScreen("screen6");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "RNS-9703(Old GUI)")) { 
setScreen("screen6");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "RNS-9703(Old GUI)")) { 
setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "RNS-9703(Old GUI)")) { 
setScreen("screen6");

  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "RNS-6803(Audio)")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "RNS-6803(Audio)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "RNS-6803(Audio)")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "RNS-6804(No Audio)")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "RNS-6804(No Audio)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "RNS-6804(No Audio)")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen6");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "EDNS-9001 Prefense")) {
 setScreen("screen6");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "EDNS-9001 Prefense")) { 
 setScreen("screen6");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "EDNS-9001 Prefense")) { 
 setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "EDNS-9001 Prefense")) { 
 setScreen("screen6");

  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "GZ-100P (+UG/TS)")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "GZ-100P (+UG/TS)")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "GZ-100P (+UG/TS)")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "ORG-9100")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "ORG-9100")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "ORG-9100")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
  setText("Solu", "NA");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
    setText("Solu", "NA");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	 setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) { 
  	 setScreen("screen6");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "≧01-09");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
  setText("Solu", "≧01-09");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
    setText("Solu", "≧01-09");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	 setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) { 
  	 setScreen("screen6");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
  setText("Solu", "NA");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
    setText("Solu", "NA");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	 setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-983P NetKonnect/RNS Server")) { 
  	 setScreen("screen6");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-986P Host1000 Server")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-986P Host1000 Server")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-986P Host1000 Server")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-988P Unified Gateway")) {
  setText("Solu", "≧01-11");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-988P Unified Gateway")) {
setText("Solu", "≧01-11");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-988P Unified Gateway")) { 
setText("Solu", "≧01-11");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-988P Unified Gateway")) { 
  	setScreen("screen6");



  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen6");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-988P Enterprise Gateway")) {
  setScreen("screen6");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-988P Enterprise Gateway")) { 
    setScreen("screen6");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-988P Enterprise Gateway")) { 
setText("Solu", "≧02-06,WLAN Transport needs to be set to OFF.");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-988P Enterprise Gateway")) { 
  	setText("Solu", "≧04-01");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-989P ViTrac iOS")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-989P ViTrac iOS")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-989P ViTrac iOS")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-989P ViTrac iOS")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-991P ViTrac Android")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-991P ViTrac Android")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-991P ViTrac Android")) { 
  	setScreen("screen4");


  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "QP-999P NKAnywhere")) {
     setScreen("screen6");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "QP-999P NKAnywhere")) {
  setScreen("screen6");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "QP-999P NKAnywhere")) { 
    setScreen("screen6");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen6");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "QP-999P NKAnywhere")) { 
  	setScreen("screen6");

  } else if ((getText("CNS6801") == "02-01" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
  } else if ((getText("CNS6801") == "02-07" && getText("drop") == "OLG-3800")) {
  setScreen("screen4");
  } else if ((getText("CNS6801") == "02-08" && getText("drop") == "OLG-3800")) { 
    setScreen("screen4");
  } else if ((getText("CNS6801") == "02-10" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");
  } else if ((getText("CNS6801") == "02-13" && getText("drop") == "OLG-3800")) { 
  	setScreen("screen4");

  	
  	//RNS9703

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "BSM-1700 (+UG/TS)")) {
      setText("Solu", "=01-15");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  setScreen("screen4");
  
  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "BSM-3500")) {
  setScreen("screen4");
  
  
  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "BSM-6000")) {
      setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "CSM-1901")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "CNS-6201")) {
         setText("Solu", "=02-40");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "CNS-6201")) {
    setText("Solu", "=02-40");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "CNS-6801")) {
         setScreen("screen6");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "CNS-6801")) {
    setScreen("screen6");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "RNS-6803(Audio)")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "RNS-6804(No Audio)")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");


  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "EDNS-9001 Prefense")) {
           setText("Solu", "NA");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "EDNS-9001 Prefense")) {
      setText("Solu", "NA");


  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "GZ-100P (+UG/TS)")) {
         setScreen("screen6");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "ORG-9100")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "ORG-9100")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
           setText("Solu", "NA");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
      setText("Solu", "NA");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
           setText("Solu", "NA");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
      setText("Solu", "NA");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-986P Host1000 Server")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-988P Unified Gateway")) {
           setText("Solu", "NA");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-988P Unified Gateway")) {
      setText("Solu", "NA");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-988P Enterprise Gateway")) {
         setText("Solu", "≧02-06");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-988P Enterprise Gateway")) {
   setText("Solu", "≧02-06");


  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-989P ViTrac iOS")) {
           setText("Solu", "NA");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-989P ViTrac iOS")) {
      setText("Solu", "NA");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-991P ViTrac Android")) {
           setText("Solu", "NA");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-991P ViTrac Android")) {
      setText("Solu", "NA");

  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "QP-999P NKAnywhere")) {
         setScreen("screen6");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");


  } else if ((getText("RNS9703") == "03-40" && getText("drop") == "OLG-3800")) {
         setScreen("screen4");
  } else if ((getText("RNS9703") == "03-40b" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
    
    
//RNS6803


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "BSM-1700 (+UG/TS)")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setScreen("screen4");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "BSM-3500")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "BSM-6000")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "CSM-1901")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "CNS-6201")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "CNS-6201")) {
    setScreen("screen4");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "CNS-6801")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "RNS-9703(Old GUI)")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "RNS-6804(No Audio)")) {
         setText("Solu", "Same Product");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "RNS-6804(No Audio)")) {
    setText("Solu", "Same Product");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "EDNS-9001 Prefense")) {
         setText("Solu", "NA");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "GZ-100P (+UG/TS)")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setScreen("screen4");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "ORG-9100")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "ORG-9100")) {
    setScreen("screen4");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
        setScreen("screen6");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen6");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
         setScreen("screen6");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen6");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
         setScreen("screen6");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen6");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-986P Host1000 Server")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");


  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-988P Unified Gateway")) {
setScreen("screen6");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-988P Unified Gateway")) {
setScreen("screen6");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-988P Enterprise Gateway")) {
setText("Solu", "≧02-06");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-988P Enterprise Gateway")) {
setText("Solu", "≧02-06");



  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-989P ViTrac iOS")) {
          setText("Solu", "NA");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "NA");



  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-991P ViTrac Android")) {
          setText("Solu", "NA");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "QP-999P NKAnywhere")) {
          setScreen("screen6");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");

  } else if ((getText("RNS6803") == "02-06" && getText("drop") == "OLG-3800")) {
         setScreen("screen4");
  } else if ((getText("RNS6803") == "02-10" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");

//RNS6804


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "BSM-1700 (+UG/TS)")) {
         setScreen("screen4");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "CNS-6201")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");



  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "RNS-9703(Old GUI)")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "RNS-6804(No Audio)")) {
    setText("Solu", "Same Product");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
    

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setScreen("screen4");
    showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "ORG-9100")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");



  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen6");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen6");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen6");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-988P Unified Gateway")) {
 setScreen("screen6");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-988P Enterprise Gateway")) {
   setText("Solu", "≧02-06");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "NA");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");


  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen6");

  } else if ((getText("RNS6804") == "02-10" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
               		showElement("text_area2");
  	setText("text_area2", "Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

//EDNS-9001

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "BSM-1700 (+UG/TS)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "BSM-3500")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "BSM-3500")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "BSM-6000")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "BSM-6000")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "CSM-1901")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "CSM-1901")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "CNS-6201")) {
          setText("Solu", "=02-40");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "CNS-6201")) {
    setText("Solu", "=02-40");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "CNS-6801")) {
             setScreen("screen6");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "CNS-6801")) {
       setScreen("screen6");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "RNS-9703(Old GUI)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "RNS-9703(Old GUI)")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "RNS-6803(Audio)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "RNS-6803(Audio)")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "RNS-6804(No Audio)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "RNS-6804(No Audio)")) {
    setText("Solu", "NA");


  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "GZ-100P (+UG/TS)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "ORG-9100")) {
             setScreen("screen4");
               showElement("text_area2");
  	setText("text_area2", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN. ");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "ORG-9100")) {
       setScreen("screen4");
                      showElement("text_area2");
  	setText("text_area2", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN. ");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-986P Host1000 Server")) {
             setScreen("screen4");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-986P Host1000 Server")) {
       setScreen("screen4");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-988P Unified Gateway")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-988P Enterprise Gateway")) {
          setScreen("screen6");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setScreen("screen6");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-989P ViTrac iOS")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "NA");


  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-991P ViTrac Android")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "QP-999P NKAnywhere")) {
             setScreen("screen6");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "QP-999P NKAnywhere")) {
       setScreen("screen6");

  } else if ((getText("EDNS9001") == "02-07" && getText("drop") == "OLG-3800")) {
          setText("Solu", "NA");
  } else if ((getText("EDNS9001") == "02-08" && getText("drop") == "OLG-3800")) {
    setText("Solu", "NA");


//GZ-100P


  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "BSM-1700 (+UG/TS)")) {
          setText("Solu", "NA");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "BSM-3500")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "BSM-3500")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "BSM-6000")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "BSM-6000")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "CSM-1901")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "CSM-1901")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "CNS-6201")) {
             setText("Solu", "≧05-01");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≧05-01");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≧05-01");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≧05-01");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "CNS-6801")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "CNS-6801")) {
    setScreen("screen4");


  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "RNS-9703(Old GUI)")) {
              setText("Solu", "≧03-40B");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "RNS-9703(Old GUI)")) {
      setText("Solu", "≧03-40B");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "RNS-9703(Old GUI)")) {
      setText("Solu", "≧03-40B");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "≧03-40B");



  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "RNS-6803(Audio)")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "RNS-6804(No Audio)")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "EDNS-9001 Prefense")) {
              setText("Solu", "NA");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "ORG-9100")) {
              setText("Solu", "NA");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "ORG-9100")) {
    setText("Solu", "NA");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "ORG-9100")) {
    setText("Solu", "NA");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "ORG-9100")) {
    setText("Solu", "NA");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
             setText("Solu", "≧02-03b");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setText("Solu", "≧02-03b");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen6");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");


  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
             setText("Solu", "≧01-09a");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setText("Solu", "≧01-09a");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
   setScreen("screen6");


  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
             setText("Solu", "≧02-11");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setText("Solu", "≧02-11");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");



  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-986P Host1000 Server")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-988P Unified Gateway")) {
              setText("Solu", "≧01-10 and ≦01-11");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-988P Unified Gateway")) {
  setText("Solu", "≧01-10 and ≦01-11");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-988P Unified Gateway")) {
     setScreen("screen6");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-988P Unified Gateway")) {
    setScreen("screen6");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-988P Enterprise Gateway")) {
         setScreen("screen6");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setScreen("screen6");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-988P Enterprise Gateway")) {
   setText("Solu", "≧02-06");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setText("Solu", "≧02-06");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-989P ViTrac iOS")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-989P ViTrac iOS")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-991P ViTrac Android")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "QP-999P NKAnywhere")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "QP-999P NKAnywhere")) {
    setScreen("screen4");

  } else if ((getText("GZ100P") == "02-06" && getText("drop") == "OLG-3800")) {
              setScreen("screen4");
  } else if ((getText("GZ100P") == "02-10" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-20" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
   } else if ((getText("GZ100P") == "02-22" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");

//ORG-9100
  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "BSM-1700 (+UG/TS)")) {
          setText("Solu", "NA");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "NA");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "BSM-3500")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "BSM-3500")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "BSM-6000")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "BSM-6000")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "CSM-1901")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "CSM-1901")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "CNS-6201")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "CNS-6201")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "CNS-6801")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "CNS-6801")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "CNS-6801")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "CNS-6801")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "RNS-9703(Old GUI)")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "RNS-9703(Old GUI)")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "RNS-6803(Audio)")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "RNS-6803(Audio)")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "RNS-6804(No Audio)")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "RNS-6804(No Audio)")) {
   setScreen("screen4");


  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "EDNS-9001 Prefense")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "EDNS-9001 Prefense")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "GZ-100P (+UG/TS)")) {
          setText("Solu", "NA");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "NA");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "NA");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "NA");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
   setScreen("screen6");


  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
   setScreen("screen6");


  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
   setScreen("screen6");


  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-986P Host1000 Server")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-986P Host1000 Server")) {
   setScreen("screen4");


  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-988P Unified Gateway")) {
          setText("Solu", "≦01-11");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≦01-11");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-988P Unified Gateway")) {
     setScreen("screen6");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-988P Unified Gateway")) {
   setScreen("screen6");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-988P Enterprise Gateway")) {
           setScreen("screen6");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen6");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setText("Solu", "≦02-06, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-988P Enterprise Gateway")) {
       setText("Solu", "≦02-06, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-989P ViTrac iOS")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-989P ViTrac iOS")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-989P ViTrac iOS")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-989P ViTrac iOS")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-991P ViTrac Android")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-991P ViTrac Android")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "QP-999P NKAnywhere")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "QP-999P NKAnywhere")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "QP-999P NKAnywhere")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "QP-999P NKAnywhere")) {
   setScreen("screen4");

  } else if ((getText("ORG9100") == "04-01" && getText("drop") == "OLG-3800")) {
           setScreen("screen4");
  } else if ((getText("ORG9100") == "04-20" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-31" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("ORG9100") == "04-51" && getText("drop") == "OLG-3800")) {
   setScreen("screen4");

//CGS-9001
  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "BSM-1700 (+UG/TS)")) {
           setText("Solu", "=01-15");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≦02-30");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "BSM-1700 (+UG/TS)")) {
  setText("Solu", "≦02-30");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "BSM-1700 (+UG/TS)")) {
   setText("Solu", "≦02-30");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "BSM-3500")) {
           setText("Solu", "≦07-41");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "BSM-3500")) {
     setText("Solu", "≦07-41");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "BSM-3500")) {
      setText("Solu", "≦07-41");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "BSM-3500")) {
   setText("Solu", "≦07-41");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "BSM-6000")) {
           setText("Solu", "≦07-41");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "BSM-6000")) {
     setText("Solu", "≦07-41");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "BSM-6000")) {
     setText("Solu", "≦07-41");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "BSM-6000")) {
   setText("Solu", "≦07-41");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "CSM-1901")) {
 setText("Solu", "≦01-28");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "CSM-1901")) {
 setText("Solu", "≦01-28");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
 setText("Solu", "≦01-28");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "CSM-1901")) {
   setScreen("screen4");
 setText("Solu", "≦01-28");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "CNS-6201")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "CNS-6201")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "CNS-6201")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "CNS-6201")) {
   setText("Solu", "NA");


  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "CNS-6801")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "CNS-6801")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "CNS-6801")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "CNS-6801")) {
   setText("Solu", "NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "RNS-9703(Old GUI)")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "RNS-9703(Old GUI)")) {
   setText("Solu", "NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "RNS-6803(Audio)")) {
         setScreen("screen6");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen6");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen6");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "RNS-6803(Audio)")) {
   setScreen("screen6");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "RNS-6804(No Audio)")) {
         setScreen("screen6");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen6");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen6");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "RNS-6804(No Audio)")) {
 setScreen("screen6");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "EDNS-9001 Prefense")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "EDNS-9001 Prefense")) {
   setText("Solu", "NA");


  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "GZ-100P (+UG/TS)")) {
             setScreen("screen6");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "GZ-100P (+UG/TS)")) {
setText("Solu", "≦02-10");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
setText("Solu", "≦02-10");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "GZ-100P (+UG/TS)")) {
   setScreen("screen4");
setText("Solu", "≦02-10");


  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "ORG-9100")) {
             setText("Solu", "≦04-20");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "ORG-9100")) {
     ssetText("Solu", "≦04-20");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≦04-20");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "ORG-9100")) {
   setText("Solu", "≦04-20");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
   setText("Solu", "NA");


  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
   setText("Solu", "NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-986P Host1000 Server")) {
             setScreen("screen4");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-986P Host1000 Server")) {
   setScreen("screen4");



  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-988P Unified Gateway")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-988P Unified Gateway")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-988P Unified Gateway")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-988P Unified Gateway")) {
   setText("Solu", "NA");


  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-988P Enterprise Gateway")) {
           setScreen("screen6");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-988P Enterprise Gateway")) {
 setScreen("screen6");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-988P Enterprise Gateway")) {
 setScreen("screen6");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-988P Enterprise Gateway")) {
 setScreen("screen6");

  
  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-989P ViTrac iOS")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-989P ViTrac iOS")) {
   setText("Solu", "NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-991P ViTrac Android")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-991P ViTrac Android")) {
   setText("Solu", "NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "QP-999P NKAnywhere")) {
           setText("Solu", "NA");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "QP-999P NKAnywhere")) {
   setText("Solu", "NA");

  } else if ((getText("dropdownCGS9001") == "02-03a" && getText("drop") == "OLG-3800")) {
           setScreen("screen4");
  } else if ((getText("dropdownCGS9001") == "02-03b" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("dropdownCGS9001") == "02-03c" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("dropdownCGS9001") == "02-03d" && getText("drop") == "OLG-3800")) {
  setScreen("screen4");
  
  
  //CGS9002
  
  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "BSM-1700 (+UG/TS)")) {
           setText("Solu", " =01-15");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "=01-15");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "BSM-1700 (+UG/TS)")) {
       setText("Solu", "≦02-30");


  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "BSM-3500")) {
          setText("Solu", "≦07-41");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "BSM-3500")) {
     setText("Solu", "≦07-41");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≦07-41");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "BSM-6000")) {
           setText("Solu", "≦07-41");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≦07-41");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≦07-41");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≦01-28");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "CSM-1901")) {
 setText("Solu", "≦01-28");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "CSM-1901")) {
 setText("Solu", "≦01-28");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "CNS-6201")) {
           setText("Solu", " =02-40");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≧05-01 and ≦05-08");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≧05-01 and ≦05-08");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "CNS-6801")) {
           setScreen("screen6");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "CNS-6801")) {
   setText("Solu", " ≦02-08");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "CNS-6801")) {
    setText("Solu", " ≦02-08");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "RNS-9703(Old GUI)")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "RNS-6803(Audio)")) {
           setScreen("screen6");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen6");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen6");


  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "RNS-6804(No Audio)")) {
           setScreen("screen6");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen6");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen6");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "EDNS-9001 Prefense")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");


  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "GZ-100P (+UG/TS)")) {
           setScreen("screen6");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen6");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "GZ-100P (+UG/TS)")) {
     	setText("Solu", "≦02-10");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "ORG-9100")) {
           setText("Solu", "≦04-20");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "ORG-9100")) {
       setText("Solu", "≦04-20");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≦04-20");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-986P Host1000 Server")) {
           setScreen("screen4");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");


  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-988P Unified Gateway")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-988P Unified Gateway")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-988P Unified Gateway")) {
     setText("Solu", "NA");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-988P Enterprise Gateway")) {
           setScreen("screen6");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-988P Enterprise Gateway")) {
      setScreen("screen6");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-988P Enterprise Gateway")) {
      setScreen("screen6");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-989P ViTrac iOS")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-991P ViTrac Android")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");

  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "QP-999P NKAnywhere")) {
           setText("Solu", "NA");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");


  } else if ((getText("CGS9002") == "01-08a" && getText("drop") == "OLG-3800")) {
           setScreen("screen4");
  } else if ((getText("CGS9002") == "01-09" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("CGS9002") == "01-09a" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");

//QP-983P
  } else if ((getText("QP983P") == "02-10" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "=01-15");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "BSM-1700 (+UG/TS)")) {
        setText("Solu", "≦02-30");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "BSM-3500")) {
       setText("Solu", "≦07-41");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "BSM-3500")) {
       setText("Solu", "≦07-41");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "BSM-6000")) {
     setText("Solu", "≦07-41");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "BSM-6000")) {
     setText("Solu", "≦07-41");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "CSM-1901")) {
  setText("Solu", "≦01-28");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "CSM-1901")) {
 setText("Solu", "≦01-28");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "CNS-6201")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "CNS-6201")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "CNS-6801")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "CNS-6801")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen6");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen6");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen6");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen6");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen6");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "GZ-100P (+UG/TS)")) {
 setText("Solu", "≦02-10");


   } else if ((getText("QP983P") == "02-10" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≦04-20");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≦04-20");


   } else if ((getText("QP983P") == "02-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");


   } else if ((getText("QP983P") == "02-10" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "QP-988P Unified Gateway")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "QP-988P Unified Gateway")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen6");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "QP-988P Enterprise Gateway")) {
   setScreen("screen6");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");

   } else if ((getText("QP983P") == "02-10" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP983P") == "02-11" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");

//qp986p

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");


   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "RNS-6804(No Audio)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "≧02-03");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-983P NetKonnect/RNS Server)")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-983P NetKonnect/RNS Server)")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-988P Unified Gateway")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-988P Unified Gateway")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "NA");


   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-991P ViTrac Android")) {
     setText("Solu", "NA");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");

   } else if ((getText("QP-986P") == "01-03" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP-986P") == "01-04" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");

//qp988UG

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "=01-15");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≧02-10 and ≦02-30");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≧02-10 and ≦02-30");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≦07-41");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≦07-41");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≦07-41");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "BSM-6000")) {
   setText("Solu", "≦07-41");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "BSM-6000")) {
    setText("Solu", "≦07-41");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "BSM-6000")) {
  setText("Solu", "≦07-41");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≦01-28");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "CSM-1901")) {
     setText("Solu", "≦01-28, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "CSM-1901")) {
        setText("Solu", "≦01-28, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≦05-08");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≦05-08");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "CNS-6201")) {
     setText("Solu", "≦05-08");


   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "CNS-6801")) {
    setText("Solu", "≦02-08");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "CNS-6801")) {
    setText("Solu", "≦02-08");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "CNS-6801")) {
    setText("Solu", "≦02-08");


   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "RNS-9703(Old GUI)")) {
    setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "RNS-9703(Old GUI)")) {
    setText("Solu", "NA");


   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "RNS-6803(Audio)")) {
   setScreen("screen6");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "RNS-6803(Audio)")) {
    setScreen("screen6");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "RNS-6803(Audio)")) {
  setScreen("screen6");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "RNS-6804(No Audio)")) {
   setScreen("screen6");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "RNS-6804(No Audio)")) {
  setScreen("screen6");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "RNS-6804(No Audio)")) {
   setScreen("screen6");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "EDNS-9001 Prefense")) {
    setText("Solu", "NA");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setScreen("screen6");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "GZ-100P (+UG/TS)")) {
      setText("Solu", "≦02-10");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setText("Solu", "≦02-10");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "ORG-9100")) {
  setText("Solu", "≦04-20");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "ORG-9100")) {
   setText("Solu", "≦04-20");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "ORG-9100")) {
   setText("Solu", "≦04-20");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
      setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
       setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
      setText("Solu", "NA");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
      setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
      setText("Solu", "NA");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");


   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "QP-986P Host1000 Server")) {
    setScreen("screen4");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "≧01-08");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");


   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "N/A");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "N/A");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "N/A");

   } else if ((getText("QP988P") == "01-08a" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
   } else if ((getText("QP988P") == "01-10" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988P") == "01-11" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "BSM-1700 (+UG/TS)")) {
   setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "BSM-1700 (+UG/TS)")) {
      setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "BSM-1700 (+UG/TS)")) {
    setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "BSM-1700 (+UG/TS)")) {
   setText("Solu", "≧02-61");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≧02-61");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "BSM-3500")) {
  setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "BSM-3500")) {
      setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "BSM-3500")) {
     setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "BSM-3500")) {
     setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "BSM-3500")) {
     setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≧08-31");
  } else if ((getText("QP988") == "04-01" && getText("drop") == "BSM-3500")) {
    setText("Solu", "≧08-31");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "BSM-6000")) {
       setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "BSM-6000")) {
    setText("Solu", "≧08-31");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "BSM-6000")) {
       setText("Solu", "≧08-31");
 } else if ((getText("QP988") == "04-01" && getText("drop") == "BSM-6000")) {
      setText("Solu", "≧08-31");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "CSM-1901")) {
     setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "CSM-1901")) {
     setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
  } else if ((getText("QP988") == "04-01" && getText("drop") == "CSM-1901")) {
    setText("Solu", "≧01-32, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "CNS-6201")) {
    setText("Solu", "≧05-13, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "CNS-6801")) {
   setText("Solu", "≧02-13");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "CNS-6801")) {
    setText("Solu", "≧02-13");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "CNS-6801")) {
   setText("Solu", "≧02-13");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "CNS-6801")) {
 setText("Solu", "≧02-13");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "CNS-6801")) {
 setText("Solu", "≧02-13");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "CNS-6801")) {
 setText("Solu", "≧02-13");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "CNS-6801")) {
 setText("Solu", "≧02-13");
  } else if ((getText("QP988") == "04-01" && getText("drop") == "CNS-6801")) {
   setText("Solu", "≧02-13");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "RNS-9703(Old GUI)")) {
 setText("Solu", "=03-40b");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "RNS-6803(Audio)")) {
	setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "RNS-6803(Audio)")) {
    setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "RNS-6803(Audio)")) {
    setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "RNS-6803(Audio)")) {
    setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "RNS-6803(Audio)")) {
    setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "RNS-6803(Audio)")) {
    setText("Solu", "≧02-10");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "RNS-6804(No Audio)")) {
   setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "RNS-6804(No Audio)")) {
    setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "RNS-6804(No Audio))")) {
   setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "RNS-6804(No Audio)")) {
   setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "RNS-6804(No Audio)")) {
   setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "RNS-6804(No Audio)")) {
 setText("Solu", "≧02-10");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "≧02-10");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "EDNS-9001 Prefense")) {
  setScreen("screen6");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "EDNS-9001 Prefense")) {
   setScreen("screen6");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "EDNS-9001 Prefense")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "EDNS-9001 Prefense")) {
  setScreen("screen6");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "EDNS-9001 Prefense")) {
   setScreen("screen6");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "EDNS-9001 Prefense")) {
  setScreen("screen6");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "EDNS-9001 Prefense")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen6");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "GZ-100P (+UG/TS)")) {
   	setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "≧02-22");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "GZ-100P (+UG/TS)")) {
    setText("Solu", "≧02-22");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "ORG-9100")) {
   setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "ORG-9100")) {
       setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "ORG-9100")) {
   setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "ORG-9100")) {
      setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "ORG-9100")) {
       setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "ORG-9100")) {
        setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≧04-51, Some features may not be available - Email Compatible team at Compatibility@nihonkohden.com");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setScreen("screen6");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
   setScreen("screen6");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
      setScreen("screen6");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
      setScreen("screen6");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
      setScreen("screen6");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
  setScreen("screen6");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
    setScreen("screen6");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen6");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "QP-986P Host1000 Server")) {
   setScreen("screen4");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "QP-986P Host1000 Server")) {
      setScreen("screen4");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "QP-986P Host1000 Server")) {
      setScreen("screen4");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "QP-989P ViTrac iOS")) {
   setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "QP-989P ViTrac iOS")) {
     setText("Solu", "≧01-08");

   } else if ((getText("QP988") == "01-02" && getText("drop") == "QP-991P ViTrac Android")) {
    setScreen("screen4");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "QQP-999P NKAnywhere")) {
   setText("Solu", "NA");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "QP-999P NKAnywhere")) {
     setText("Solu", "NA");


   } else if ((getText("QP988") == "01-02" && getText("drop") == "OLG-3800")) {
    setScreen("screen4");
   } else if ((getText("QP988") == "01-03" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-01" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-02" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-03" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-04" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "02-06" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
   } else if ((getText("QP988") == "04-01" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");



//QP-991P
   } else if ((getText("QP989p") == "01-08" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
  } else if ((getText("QP989p") == "01-10" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
  } else if ((getText("QP989p") == "01-11" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
  } else if ((getText("QP989p") == "01-11a" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");


   } else if ((getText("QP989p") == "01-08" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");


   } else if ((getText("QP989p") == "01-08" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "QP-986P Host1000 Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "QP-986P Host1000 Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "QP-986P Host1000 Server")) {
     setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "QP-986P Host1000 Server")) {
     setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≧01-08a");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≧01-08a");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≧01-08a");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≧01-08a");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");


   } else if ((getText("QP989p") == "01-08" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");
  } else if ((getText("QP989p") == "01-11a" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-10" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");
   } else if ((getText("QP989p") == "01-11a" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");

   } else if ((getText("QP989p") == "01-08" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
  } else if ((getText("QP989p") == "01-10" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
  } else if ((getText("QP989p") == "01-11" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");
  } else if ((getText("QP989p") == "01-11a" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");

//QP-991P
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "RNS-9703(Old GUI)")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "RNS-6803(Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "RNS-6804(No Audio)")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "ORG-9100")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "QP-986P Host1000 Server")) {
     setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "≧01-08a");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "QP-999P NKAnywhere")) {
    setText("Solu", "NA");
   } else if ((getText("qp991p") == "01-04" && getText("drop") == "OLG-3800")) {
     setScreen("screen4");

//QP999P
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setText("Solu", "≧02-10");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "BSM-3500")) {
      setText("Solu", "≧07-41")
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "BSM-6000")) {
     setText("Solu", "≧07-41")
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "CSM-1901")) {
     setText("Solu", "≧01-27")
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "CNS-6201")) {
     setScreen("screen6");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "CNS-6801")) {
     setScreen("screen6");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "RNS-9703(Old GUI)")) {
     setScreen("screen6");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "RNS-6803(Audio)")) {
     setScreen("screen6");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "RNS-6804(No Audio)")) {
    setScreen("screen6");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "EDNS-9001 Prefense")) {
     setScreen("screen6");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "ORG-9100")) {
     setText("Solu", "≧04-01")
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
     setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "QP-986P Host1000 Server")) {
     setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "QP-988P Unified Gateway")) {
    setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "QP-988P Enterprise Gateway")) {
    setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "QP-989P ViTrac iOS")) {
    setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "QP-991P ViTrac Android")) {
    setText("Solu", "NA");
   } else if ((getText("qp999P") == "01-05" && getText("drop") == "OLG-3800")) {
     setScreen("screen6");

//OLG-3800

   } else if ((getText("olg3800") == "01-03" && getText("drop") == "BSM-1700 (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "BSM-3500")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "BSM-6000")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "CSM-1901")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "CNS-6201")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "CNS-6801")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "RNS-9703(Old GUI)")) {
      setScreen("screen4");;
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "RNS-6803(Audio)")) {
      setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "RNS-6804(No Audio)")) {
      setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "EDNS-9001 Prefense")) {
     setText("Solu", "NA");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "GZ-100P (+UG/TS)")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "ORG-9100")) {
     setText("Solu", "NA");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "CGS-9001 Pager Gateway (Legacy)")) {
    setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "CGS-9002 HL7 Gateway (Legacy)")) {
    setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-983P NetKonnect/RNS Server")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-986P Host1000 Server")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-988P Unified Gateway")) {
    setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-988P Enterprise Gateway")) {
     setScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-989P ViTrac iOS")) {
    ssetScreen("screen4");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-999P NKAnywhere")) {
   setScreen("screen6");
   } else if ((getText("olg3800") == "01-03" && getText("drop") == "QP-991P ViTrac Android")) {
     setScreen("screen4");






  } else if ((getText("GZ100P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")

  } else if ((getText("CSM1901") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
  } else if ((getText("drop_170") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
  } else if ((getText("CGS9002") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
  } else if ((getText("CNS6201") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("CNS6801") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("EDNS9001") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("qp999P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("qp991p") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("olg3800") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("RNS9703") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("RNS6804") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
   } else if ((getText("RNS6803") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware")
    } else if ((getText("QP989p") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("QP988P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("QP983P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("QP-986P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("ORG9100") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("GZ100P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("dropdownCGS9001") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("3500") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("1700") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("6000") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
    } else if ((getText("qp999P") == "" || getText("drop") == "")) {
     setText("Solu","Please Select a Firmware") 
  } else {
    
  }
});
onEvent("drop", "change", function(event) {
  console.log("Selected option: " + getText("drop"));
});
onEvent("drop", "change", function(event) {
  if (getText("drop") == getText("direction_drop6")) {
    hideElement("go");
   
  }
  if (getText("drop") != getText("direction_drop6")) {
    showElement("go");
  } else if ((getText("direction_drop6") == getText("drop"))) {
    hideElement("go");
  } else if ((getText("direction_drop6") != getText("drop"))) {
  } else if ((getText("direction_drop6") == getText("drop") || getText("drop") == getText("direction_drop6"))) {
    setText("Solu","Please Select a Firmware") 
  } else {
    
  }
  console.log("Selected option: " + getText("drop"));
});
onEvent("button3", "click", function(event) {
  console.log("button3 clicked!");
  setScreen("start_screen6");
  setText("text_area2", "");
  hideElement("text_area2");
  
});
onEvent("direction_drop6", "change", function(event) {
  //This is for checking if Product 1 = product 2 hide 
  console.log("Selected option: " + getText("direction_drop6"));
  if (getText("drop") == getText("direction_drop6")) {
    hideElement("go");
    setText("Solu", "Same Device")
  }
  if (getText("drop") != getText("direction_drop6")) {
    showElement("go");
    setText("Solu"," ")
  } else if ((getText("direction_drop6") == getText("drop"))) {
    hideElement("go");
    setText("Solu", "Same Device");
  } else if ((getText("direction_drop6") != getText("drop"))) {
    showElement("go");
    setText("Solu"," ")
  } else {
    
  }
});

onEvent("drop", "change", function(event) {
  console.log("Selected option: " + getText("drop"));
  setText("Solu", "")
});
onEvent("direction_drop6", "change", function(event) {
  console.log("Selected option: " + getText("drop"));
  setText("Solu", "")
});

onEvent("Homebutton2", "click", function(event) {
  console.log("Homebutton2 clicked!");
setText("direction_dropdown", " ");
setText("dropdown6", " ");
setText("Sol1","")
   hideElement("UNG");
   hideElement("EG");
    hideElement("Host1000");
    hideElement("NetKonnect");
    hideElement("HL7");
    hideElement("Pager");
    hideElement("Pref");
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
    setText("EG", " ");
    setText("Host1000", "");
    setText("NetKonnect","");
    setText("HL7","");
    setText("Pager","");
    setText("Pref","");
    setText("UNG","");

});
onEvent("button3", "click", function(event) {
  console.log("button3 clicked!");
setText("direction_drop6", " ");
setText("drop", " ");
setText("Solu","")
    hideElement("1700");
    hideElement("CGS9002");
    hideElement("CNS6201");
    hideElement("CNS6801");
    hideElement("EDNS9001");
    hideElement("qp999P");
    hideElement("qp991p");
    hideElement("olg3800");
    hideElement("dropdownlist2");
    hideElement("RNS9703");
    hideElement("RNS6804");
    hideElement("RNS6803");
    hideElement("QP989p");
    hideElement("QP988P");
    hideElement("QP988");
    hideElement("QP983P");
    hideElement("QP-986P");
    hideElement("ORG9100");
    hideElement("GZ100P");
    hideElement("CGS9002");
    hideElement("3500");
    hideElement("6000");
    hideElement("CSM1901");
    hideElement("qp999P");
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
     setText("dropdownCGS9001","");
});


onEvent("button7", "click", function(event) {
  console.log("button7 clicked!");
  setScreen("start_screen2")
    setText("CGS9002", " ");
    setText("CNS6201", "");
    setText("CNS6801","");
    setText("EDNS9001","");
    setText("qp999P","");
    setText("qp991p","");
    setText("olg3800","");
    setText("RNS9703","");
    setText("RNS6804","");
    setText("RNS6803","");
    setText("QP989p","");
    setText("QP988P","");
    setText("QP988","");
    setText("QP983P","");
    setText("QP-986P","");
    setText("ORG9100","");
    setText("GZ100P","");
    setText("CGS9002","");
    setText("3500","");
    setText("6000","");
    setText("CSM1901","");
    setText("qp999P","");
    setText("1700","");
     setText("dropdownCGS9001","");
     setText("direction_drop6")
     setText("drop")
     hideElement("go")
});

onEvent("button8", "click", function(event) {
  console.log("button8 clicked!");
   setScreen("start_screen2")
});



