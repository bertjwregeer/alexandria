value_to_type = {
        1: "A",
        2: "NS",
        5: "CNAME",
        6: "SOA",
        12: "PTR",
        15: "MX",
        16: "TXT",
        17: "RP",
        18: "AFSDB",
        24: "SIG",
        25: "KEY",
        28: "AAAA",
        29: "LOC",
        33: "SRV",
        35: "NAPTR",
        36: "KX",
        37: "CERT",
        39: "DNAME",
        42: "APL",
        43: "DS",
        44: "SSHFP",
        45: "IPSECKEY",
        46: "RRSIG",
        47: "NSEC",
        48: "DNSKEY",
        49: "DHCID",
        50: "NSEC3",
        51: "NSEC3PARAM",
        52: "TLSA",
        55: "HIP",
        59: "CDS",
        60: "CDNSKEY",
        99: "SPF",
        249: "TKEY",
        250: "TSIG",
        257: "CAA",
        32768: "TA",
        32769: "DLV"
        }

type_to_value = {value:key for key, value in value_to_type.items()}

