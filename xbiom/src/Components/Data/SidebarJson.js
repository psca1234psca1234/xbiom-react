import React from 'react'

export const JsonData = {
    "ROOT": {
        "HEADER": [
            {
                "HIDDEN": "FALSE",
                "I": [
                    {
                        "HIDDEN": "FALSE",
                        "ID": "TITLE",
                        "VALUE": "Terminology"
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "SUPPORT",
                        "SINGLEMODULEVIEW": 1,
                        "VALUE": "Support"
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "IWISH",
                        "SINGLEMODULEVIEW": 1,
                        "VALUE": "I Wish..."
                    },
                    {
                        "HIDDEN": "FALSE",
                        "ID": "INSTANCENAME",
                        "VALUE": "Development Environment"
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "NOTIFICATION",
                        "VALUE": ""
                    },
                    {
                        "HIDDEN": "FALSE",
                        "ID": "DATETIME",
                        "VALUE": ""
                    },
                    {
                        "COMPONENT": "tbtext",
                        "HIDDEN": "FALSE",
                        "ID": "USERNAME",
                        "VALUE": ""
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "ABOUT",
                        "SINGLEMODULEVIEW": 1,
                        "VALUE": "About"
                    },
                    {
                        "HIDDEN": "FALSE",
                        "ID": "HELP",
                        "VALUE": "Help"
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "LOGOFF",
                        "SINGLEMODULEVIEW": 1,
                        "VALUE": "Log Off"
                    },
                    {
                        "HIDDEN": "FALSE",
                        "ID": "LOGO",
                        "LINKTYPE": "ABSOLUTE",
                        "ONCLICK": "TRUE",
                        "TOOLTIP": "lang.PC_LOGO_TOOLTIP",
                        "URL": "filepath.POINTCROSS",
                        "VALUE": "..\/Images\/Pointcross_Lifesciences.png"
                    },
                    {
                        "HIDDEN": "FALSE",
                        "I": {
                            "C": 1,
                            "CN": "Xbiom-NonClinical",
                            "DF": 1
                        },
                        "ID": "CORPORATELISTS"
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "QUICKLINKS",
                        "Q": [
                            {
                                "CAPTION": "commonVars.IWish",
                                "HIDDEN": "TRUE",
                                "ICONCLS": "fa fa-envelope",
                                "ID": "IWISH",
                                "LINKTYPE": "MAIL",
                                "NEWWINDOW": "TRUE",
                                "REDIRECTSRC": "filepath.REDIRECT_TO_IWISH_LINK"
                            },
                            {
                                "CAPTION": "commonVars.Support",
                                "HIDDEN": "TRUE",
                                "ICONCLS": "fa fa-life-ring",
                                "ID": "SUPPORT",
                                "LINKTYPE": "MAIL",
                                "NEWWINDOW": "FALSE",
                                "REDIRECTSRC": "filepath.REDIRECT_TO_SUPPORT_LINK"
                            },
                            {
                                "CAPTION": "commonVars.UserAdministration",
                                "HIDDEN": "FALSE",
                                "ICONCLS": "fa fa-users",
                                "ID": "USER MANAGEMENT",
                                "LINKTYPE": "WEBSERVICE",
                                "NEWWINDOW": "TRUE",
                                "REDIRECTSRC": "filepath.USR_MNGMT_LINK"
                            }
                        ]
                    },
                    {
                        "HIDDEN": "TRUE",
                        "ID": "HELP",
                        "VALUE": ""
                    }
                ],
                "RIGHTS": 0
            },
            {
                "COLLAPSEONSELECT": "FALSE",
                "HIDESEARCH": "TRUE",
                "I": [
                    {
                        "ACTIVE": 1,
                        "CLS": "Terminology.view.module.TabPanel",
                        "DISABLED": "false",
                        "EXPANDED": "true",
                        "HIDDEN": "false",
                        "I": [
                            {
                                "ACTIVE": 0,
                                "CLS": "Terminology.view.module.TabPanel",
                                "EXPANDED": "true",
                                "GTYPE": 1,
                                "HIDDEN": "false",
                                "ICONCLS": "fa fa-angle-double-right",
                                "ID": "nav-gbl",
                                "INDX": 1,
                                "LEAF": "true",
                                "NAME": "global",
                                "TEXT": "Global"
                            },
                            {
                                "ACTIVE": 0,
                                "CLS": "Terminology.view.module.TabPanel",
                                "EXPANDED": "true",
                                "GTYPE": 2,
                                "HIDDEN": "false",
                                "ICONCLS": "fa fa-angle-double-right",
                                "ID": "nav-std",
                                "INDX": 3,
                                "LEAF": "true",
                                "NAME": "standard",
                                "TEXT": "Standard - CDISC"
                            },
                            {
                                "ACTIVE": 0,
                                "CLS": "Terminology.view.module.TabPanel",
                                "EXPANDED": "true",
                                "GTYPE": 5,
                                "HIDDEN": "false",
                                "ICONCLS": "fa fa-angle-double-right",
                                "ID": "nav-cus",
                                "INDX": 4,
                                "LEAF": "true",
                                "NAME": "custom",
                                "TEXT": "Model CT"
                            },
                            {
                                "ACTIVE": 0,
                                "CLS": "Terminology.view.module.TabPanel",
                                "EXPANDED": "true",
                                "GTYPE": 3,
                                "HIDDEN": "false",
                                "ICONCLS": "fa fa-angle-double-right",
                                "ID": "nav-loc",
                                "INDIVIDUAL_CODETABS": "TRUE",
                                "INDX": 5,
                                "LEAF": "true",
                                "NAME": "Local",
                                "TEXT": "Local"
                            }
                        ],
                        "ICONCLS": "fa fa-cubes",
                        "ID": "nav-ct",
                        "INDX": 1,
                        "NAME": "controlledTerminology",
                        "TEXT": "Controlled Terminology"
                    },
                    {
                        "ACTIVE": 0,
                        "CLS": "Terminology.view.module.TabPanel",
                        "EXPANDED": "false",
                        "GTYPE": 6,
                        "HIDDEN": "false",
                        "ICONCLS": "fa fa-angle-double-right",
                        "ID": "nav-extdb",
                        "INDX": 2,
                        "LEAF": "true",
                        "NAME": "dictionary",
                        "TEXT": "External Dictionaries"
                    },
                    {
                        "ACTIVE": 0,
                        "CLS": "Terminology.view.system.TabPanel",
                        "EXPANDED": "false",
                        "HIDDEN": "false",
                        "ICONCLS": "fa fa-desktop",
                        "ID": "nav-sys",
                        "INDX": 2,
                        "LEAF": "true",
                        "NAME": "system",
                        "TEXT": "System Codelist"
                    },
                    {
                        "ACTIVE": 0,
                        "CLS": "Terminology.view.system.MeataDataPanel",
                        "EXPANDED": "false",
                        "HIDDEN": "false",
                        "ICONCLS": "fa fa-gear",
                        "ID": "nav-metadata-def",
                        "INDX": 4,
                        "LEAF": "true",
                        "NAME": "MetadataDefinition",
                        "TEXT": "Metadata Definition"
                    },
                    {
                        "ACTIVE": 0,
                        "CLS": "Terminology.view.UnitsModule.TabPanel",
                        "EXPANDED": "false",
                        "HIDDEN": "false",
                        "ICONCLS": "fa fa-puzzle-piece",
                        "ID": "nav-stdunits",
                        "INDX": 3,
                        "LEAF": "true",
                        "NAME": "nav-stdunits",
                        "TEXT": "Standard Units",
                        "UTYPE": 1
                    },
                    {
                        "ACTIVE": 0,
                        "CLS": "Terminology.view.UnitsModule.TabPanel",
                        "EXPANDED": "false",
                        "HIDDEN": "false",
                        "ICONCLS": "fa fa-retweet",
                        "ID": "nav-unitscon",
                        "INDX": 4,
                        "LEAF": "true",
                        "NAME": "nav-unitscon",
                        "TEXT": "Unit Conversion Factors",
                        "UTYPE": 2
                    }
                ],
                "TYPE": "TREE",
                "WIDTH": ""
            },
            {
                "G": [
                    {
                        "I": {
                            "EDITABLE": "TRUE",
                            "HIDDEN": "FALSE",
                            "INDX": 3,
                            "MANDATORY": "FALSE",
                            "MULTISELECT": "FALSE",
                            "NAME": "userCombo",
                            "TEXT": "User Name",
                            "XTYPE": "userCombo"
                        }
                    },
                    {
                        "I": [
                            {
                                "INDX": 1,
                                "MANDATORY": "TRUE",
                                "MULTISELECT": "FALSE",
                                "NAME": "module",
                                "O": [
                                    {
                                        "HIDDEN": "TRUE",
                                        "INDX": 1,
                                        "TEXT": "All",
                                        "VALUE": 3
                                    },
                                    {
                                        "DEFAULTVALUE": 1,
                                        "HIDDEN": "FALSE",
                                        "INDX": 2,
                                        "TEXT": "System Codelist",
                                        "VALUE": 1
                                    },
                                    {
                                        "DEFAULTVALUE": 0,
                                        "HIDDEN": "FALSE",
                                        "INDX": 3,
                                        "TEXT": "Controlled Terminology",
                                        "VALUE": 2
                                    }
                                ],
                                "TEXT": "Select Type",
                                "XTYPE": "customCombo"
                            },
                            {
                                "HIDDEN": "FALSE",
                                "INDX": 2,
                                "MANDATORY": "TRUE",
                                "NAME": "format",
                                "O": [
                                    {
                                        "DEFAULTVALUE": 0,
                                        "HIDDEN": "FALSE",
                                        "INDX": 1,
                                        "TEXT": "PDF",
                                        "VALUE": 1
                                    },
                                    {
                                        "DEFAULTVALUE": 1,
                                        "HIDDEN": "FALSE",
                                        "INDX": 2,
                                        "TEXT": "Excel",
                                        "VALUE": 2
                                    }
                                ],
                                "TEXT": "Format",
                                "XTYPE": "customCombo"
                            }
                        ]
                    },
                    {
                        "I": {
                            "HIDDEN": "FALSE",
                            "INDX": 1,
                            "NAME": "",
                            "TEXT": "",
                            "XTYPE": "customDatefield"
                        }
                    }
                ],
                "HIDDEN": "FALSE",
                "ID": "audit_trail",
                "TEXT": "Audit Trail Report",
                "URW": 1
            },
            {
                "G": {
                    "I": [
                        {
                            "INDX": 1,
                            "MANDATORY": "TRUE",
                            "MULTISELECT": "FALSE",
                            "NAME": "module",
                            "O": [
                                {
                                    "DEFAULTVALUE": 1,
                                    "HIDDEN": "FALSE",
                                    "INDX": 1,
                                    "TEXT": "Standard Units",
                                    "VALUE": 1
                                },
                                {
                                    "DEFAULTVALUE": 0,
                                    "HIDDEN": "FALSE",
                                    "INDX": 1,
                                    "TEXT": "Unit Conversion Factors",
                                    "VALUE": 2
                                }
                            ],
                            "TEXT": "Select Type",
                            "XTYPE": "customCombo"
                        },
                        {
                            "HIDDEN": "FALSE",
                            "INDX": 2,
                            "MANDATORY": "TRUE",
                            "NAME": "format",
                            "O": [
                                {
                                    "DEFAULTVALUE": 1,
                                    "HIDDEN": "FALSE",
                                    "INDX": 1,
                                    "TEXT": "Excel",
                                    "VALUE": 2
                                },
                                {
                                    "DEFAULTVALUE": 0,
                                    "HIDDEN": "FALSE",
                                    "INDX": 2,
                                    "TEXT": "PDF",
                                    "VALUE": 1
                                }
                            ],
                            "TEXT": "Format",
                            "XTYPE": "customCombo"
                        }
                    ]
                },
                "HIDDEN": "FALSE",
                "ID": "export_menu",
                "TEXT": "Export"
            },
            {
                "HIDDEN": "FALSE",
                "I": [
                    {
                        "DEFAULTVALUE": 1,
                        "HIDDEN": "FALSE",
                        "INDX": 1,
                        "TEXT": "CDISC Terminology",
                        "VALUE": 0
                    },
                    {
                        "DEFAULTVALUE": 0,
                        "HIDDEN": "FALSE",
                        "INDX": 2,
                        "TEXT": "Standard Units",
                        "VALUE": 1
                    },
                    {
                        "DEFAULTVALUE": 0,
                        "HIDDEN": "FALSE",
                        "INDX": 3,
                        "TEXT": "Unit Conversion Factors",
                        "VALUE": 2
                    }
                ],
                "ID": "deploy_ct",
                "TEXT": "Deploy CDISC Terminology"
            }
        ],
        "SYSTYPE": -100
    }
}