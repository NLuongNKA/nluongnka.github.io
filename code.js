/*
The dropdown will give a list of options from which the user can 
  choose only one option. The device are seperate per notes
*/

/*
The code waits for the go button to get clicked and looks to see what option
  the user has selected in the dropdown menu. It displays a screen that the
  selected product leads to. 
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
    
} else if ((getText("dropdown6") == "QP-986P HOST1000 Server")) {
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
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "01-02")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  	
  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "01-03")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "01-03")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "01-03")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-01")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-01")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-01")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-01")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-02")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-02")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-02")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-02")) { 
  setScreen("screen1");

  
  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-03")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-03")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-03")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-03")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-04")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-04")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-04")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-04")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "02-06")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "02-06")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "02-06")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
   } else if ((getText("drop_1700") == "02-61" && getText("EG") == "02-06")) { 
  setScreen("screen1");

  } else if ((getText("drop_1700") == "01-15" && getText("EG") == "04-01")) {
    setScreen("screen1");
  } else if ((getText("drop_1700") == "02-10" && getText("EG") == "04-01")) {
  	setScreen("screen1");
  } else if ((getText("drop_1700") == "02-30" && getText("EG") == "04-01")) { 
     setScreen("screen1");
  } else if ((getText("drop_1700") == "02-40" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
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
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "01-02")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "01-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "01-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "01-03")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-01")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-01")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-01")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-02")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-02")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-03")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-03")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-04")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-04")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-04")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-04")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "02-06")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "02-06")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "02-06")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "02-06")) { 
  	setScreen("screen1");

  } else if ((getText("dropdown3500") == "06-31" && getText("EG") == "04-01")) {
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "07-41" && getText("EG") == "04-01")) {
  	setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-11" && getText("EG") == "04-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdown3500") == "08-31" && getText("EG") == "04-01")) { 
  	setScreen("screen1");

//PREF
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
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "01-02")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "01-02")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "01-02")) { 
  	setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "01-03")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "01-03")) { 
  	setScreen("screen1");


  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-01")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-01")) {
  setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-01")) { 
     setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-01")) { 
  setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-02")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-02")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-02")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  
  
  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-03")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-03")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-03")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "02-04")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "02-04")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "02-04")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "02-04")) { 
  	setScreen("screen1");

  } else if ((getText("BSM-6000") == "07-02" && getText("EG") == "04-01")) {
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "07-41" && getText("EG") == "04-01")) {
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-02" && getText("EG") == "04-01")) { 
    setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-12" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("BSM-6000") == "08-31" && getText("EG") == "04-01")) { 
  	setScreen("screen1");


//PREF_BSM6000
  } else if ((getText("BSM-6000") == "07-02" && getText("PREF") == "02-07")) {
    setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "07-41" && getText("PREF") == "02-07")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-02" && getText("PREF") == "02-07")) { 
   setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-12" && getText("PREF") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-31" && getText("PREF") == "02-07")) { 
  	setText("Sol1", "Not Applicable ");

  } else if ((getText("BSM-6000") == "07-02" && getText("PREF") == "02-08")) {
     setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "07-41" && getText("PREF") == "02-08")) {
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-02" && getText("PREF") == "02-08")) { 
    setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-12" && getText("PREF") == "02-08")) { 
  	setText("Sol1", "Not Applicable ");
  } else if ((getText("BSM-6000") == "08-31" && getText("PREF") == "02-08")) { 
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
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "01-02")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "01-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "01-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "01-03")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "01-03")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-01")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-01")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-01")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-02")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-02")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-02")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-03")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-03")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-04")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-04")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-04")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-04")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "02-06")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "02-06")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "02-06")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
   } else if ((getText("dropdownCSM1901") == "01-32" && getText("EG") == "02-06")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCSM1901") == "01-21" && getText("EG") == "04-01")) {
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-23" && getText("EG") == "04-01")) {
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-26" && getText("EG") == "04-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-27" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-28" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCSM1901") == "01-30" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
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

//HOST1000_CSM1901

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
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "01-02")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "01-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "01-02")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "01-03")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "01-03")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "01-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-01")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-01")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-01")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-02")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-02")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-03")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-03")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-04")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-04")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-04")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-04")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "02-06")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "02-06")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "02-06")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "02-06")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6201") == "02-40" && getText("EG") == "04-01")) {
     setScreen("screen1"); 
  } else if ((getText("dropdownCNS6201") == "03-40" && getText("EG") == "04-01")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-01" && getText("EG") == "04-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-07" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-08" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-10" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6201") == "05-13" && getText("EG") == "04-01")) { 
  	setScreen("screen1");


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
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "01-02")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "01-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "01-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "01-02")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "01-03")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "01-03")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "01-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "01-03")) { 
  	setScreen("screen1");
  	
  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-01")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-01")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-01")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-02")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-02")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-02")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-02")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-02")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-03")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-03")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-03")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-03")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-03")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-04")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-04")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-04")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-04")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-04")) { 
  	setScreen("screen1");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "02-06")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "02-06")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "02-06")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "02-06")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "02-06")) { 
  	setScreen("screen1");

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("EG") == "04-01")) {
     setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("EG") == "04-01")) {
  setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("EG") == "04-01")) { 
    setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("EG") == "04-01")) { 
  	setScreen("screen1");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("EG") == "04-01")) { 
  	setScreen("screen1");

//Pref_CNS6801

  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pref") == "02-07")) {
       showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pref") == "02-07")) {
  setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pref") == "02-07")) { 
    setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pref") == "02-07")) { 
  	setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pref") == "02-07")) { 
  	setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");


  } else if ((getText("dropdownCNS6801") == "02-01" && getText("Pref") == "02-08")) {
       showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-07" && getText("Pref") == "02-08")) {
  setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-08" && getText("Pref") == "02-08")) { 
    setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-10" && getText("Pref") == "02-08")) { 
  	setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");
  } else if ((getText("dropdownCNS6801") == "02-13" && getText("Pref") == "02-08")) { 
  	setScreen("screen1");
	showElement("notearea");
  	setText("notearea", "It is not recommended to use Prefense with New GUI CNS.");

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
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "01-03")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-01")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-01")) {
    setScreen("screen1");
    
  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-02")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-03")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-03")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-04")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-04")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "02-06")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS9703") == "03-40b" && getText("EG") == "02-06")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS9703") == "03-40" && getText("EG") == "04-01")) {
         setScreen("screen1");
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
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "01-03")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-01")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-01")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-02")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-03")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-04")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-04")) {
    setScreen("screen1");

  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "02-06")) {
         setScreen("screen1");
  } else if ((getText("dropdownRNS6803") == "02-10" && getText("EG") == "02-06")) {
    setScreen("screen1");


  } else if ((getText("dropdownRNS6803") == "02-06" && getText("EG") == "04-01")) {
         setScreen("screen1");
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
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "01-02")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "01-02")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "01-02")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "01-03")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "01-03")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "01-03")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "01-03")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-01")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-01")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-01")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-01")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-02")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-02")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-02")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-02")) {
    setScreen("screen1");



  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-03")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-03")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-03")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-04")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-04")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-04")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-04")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "02-06")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "02-06")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "02-06")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("EG") == "02-06")) {
    setScreen("screen1");


  } else if ((getText("dropdownGZ100P") == "02-06" && getText("EG") == "04-01")) {
              setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("EG") == "04-01")) {
    setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("EG") == "04-01")) {
     setScreen("screen1");
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

//host1000_GZ

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("host1000") == "01-03")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("host1000") == "01-03")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("host1000") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("host1000") == "01-03")) {
    setScreen("screen1");

  } else if ((getText("dropdownGZ100P") == "02-06" && getText("host1000") == "01-04")) {
            setScreen("screen1");
  } else if ((getText("dropdownGZ100P") == "02-10" && getText("host1000") == "01-04")) {
   setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-20" && getText("host1000") == "01-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownGZ100P") == "02-22" && getText("host1000") == "01-04")) {
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
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "01-02")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "01-02")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "01-02")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "01-03")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "01-03")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "01-03")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "01-03")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-01")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-01")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-01")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-01")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
 } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-02")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-02")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-02")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-02")) {
     setScreen("screen1");
  showElement("notearea");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-02")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-03")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-03")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-03")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-04")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-04")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-04")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-04")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "02-06")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "02-06")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "02-06")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "02-06")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("EG") == "04-01")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("EG") == "04-01")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("EG") == "04-01")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("EG") == "04-01")) {
     setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "Diagnosis field with more than 200 characters causes an issue to ORG-9100 when ADT is used with QP-988P(EG) and HL7 Server Extension.");


//Pref_ORG


  } else if ((getText("dropdownORG9100") == "04-01" && getText("PREF") == "02-07")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("PREF") == "02-07")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("PREF") == "02-07")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("PREF") == "02-07")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");

  } else if ((getText("dropdownORG9100") == "04-01" && getText("PREF") == "02-08")) {
       setScreen("screen1");
  showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("PREF") == "02-08")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("PREF") == "02-08")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("PREF") == "02-08")) {
     setScreen("screen1");
 showElement("notearea");
  	setText("notearea", "ORG needs to be set to Alarm Type: Main and Protocol: 1st GEN.");


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
   } else if ((getText("dropdownORG9100") == "04-31" && getText("NHost1000") == "01-03")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-51" && getText("Host1000") == "01-03")) {
     setScreen("screen1");


  } else if ((getText("dropdownORG9100") == "04-01" && getText("Host1000") == "01-04")) {
       setScreen("screen1");
  } else if ((getText("dropdownORG9100") == "04-20" && getText("Host1000") == "01-04")) {
     setScreen("screen1");
   } else if ((getText("dropdownORG9100") == "04-31" && getText("NHost1000") == "01-04")) {
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

 //host1000_991
   } else if ((getText("dropdownqp991p") == "01-04" && getText("host1000") == "01-03")) {
         setText("Sol1", "Not Applicable ");
   } else if ((getText("dropdownqp991p") == "01-04" && getText("host1000") == "01-04")) {
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

//pref_999
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

//host1000_999
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
//PREF_OLG
   } else if ((getText("dropdownolg3800") == "01-03" && getText("PREF") == "02-07")) {
       setScreen("screen1");
   } else if ((getText("dropdownolg3800") == "01-03" && getText("PREF") == "02-08")) {
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
//host1000_olg

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
   hideElement("UNG")
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
  setText("notearea", "");
  hideElement("notearea");
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
    
} else if ((getText("dropdown6") == "QP-986P HOST1000 Server")) {
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
