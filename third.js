
//Clear all button function. THIS WAS THE EASIEST ONE TO DO UGH

const clearFields = function () {
    document.getElementById("kilometerField").value = "";
    document.getElementById("meterField").value = "";
    document.getElementById("centimeterField").value = "";
    document.getElementById("millimeterField").value = "";
    document.getElementById("mileField").value = "";
    document.getElementById("yardField").value = "";
    document.getElementById("footField").value = "";
    document.getElementById("inchField").value = "";
}


//This marks the start of the formulae and the autoconverters

//Kilometer values

const autoConvert_km = function () {
    let autoConv_km = document.getElementById('kilometerField').value;

    if (autoConv_km != '') {
        document.getElementById('meterField').value = (km_To_m());
        document.getElementById('centimeterField').value = (km_To_cm());
        document.getElementById('millimeterField').value = (km_To_mm());
        document.getElementById('mileField').value = (km_To_mi());
        document.getElementById('yardField').value = (km_To_yd());
        document.getElementById('footField').value = (km_To_ft());
        document.getElementById('inchField').value = (km_To_in());
    } else {
        document.getElementById('meterField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('footField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const km_To_m = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmTom_Result = km_Value * 1000;
    let kmTom_ResultFinal = parseFloat(kmTom_Result).toFixed(5);
    return kmTom_ResultFinal;
}

const km_To_cm = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmTocm_Result = km_Value * 100;
    let kmTocm_ResultFinal = parseFloat(kmTocm_Result).toFixed(5);
    return kmTocm_ResultFinal;
}

const km_To_mm = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmTomm_Result = km_Value * 0.000001;
    let kmTomm_ResultFinal = parseFloat(kmTomm_Result).toFixed(5);
    return kmTomm_ResultFinal;
}

const km_To_mi = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmTomi_Result = km_Value / 1.609;
    let kmTomi_ResultFinal = parseFloat(kmTomi_Result).toFixed(5);
    return kmTomi_ResultFinal;
}

const km_To_yd = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmToyd_Result = km_Value * 1094;
    let kmToyd_ResultFinal = parseFloat(kmToyd_Result).toFixed(5);
    return kmToyd_ResultFinal;
}

const km_To_ft = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmToft_Result = km_Value * 3281;
    let kmToft_ResultFinal = parseFloat(kmToft_Result).toFixed(5);
    return kmToft_ResultFinal;
}

const km_To_in = function () {
    let km_Value = document.getElementById("kilometerField").value;
    let kmToin_Result = km_Value * 3281;
    let kmToin_ResultFinal = parseFloat(kmToin_Result).toFixed(5);
    return kmToin_ResultFinal;
}

// Meter values

const autoConvert_m = function () {
    let autoConv_m = document.getElementById('meterField').value;

    if (autoConv_m != '') {
        document.getElementById('kilometerField').value = (m_To_km());
        document.getElementById('centimeterField').value = (m_To_cm());
        document.getElementById('millimeterField').value = (m_To_mm());
        document.getElementById('mileField').value = (m_To_mi());
        document.getElementById('yardField').value = (m_To_yd());
        document.getElementById('footField').value = (m_To_ft());
        document.getElementById('inchField').value = (m_To_in());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('footField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const m_To_km = function () {
    let m_Value = document.getElementById("meterField").value;
    let mTokm_Result = m_Value / 1000;
    let mTokm_ResultFinal = parseFloat(mTokm_Result).toFixed(5);
    return mTokm_ResultFinal;
}

const m_To_cm = function () {
    let m_Value = document.getElementById("meterField").value;
    let mTocm_Result = m_Value * 100;
    let mTocm_ResultFinal = parseFloat(mTocm_Result).toFixed(5);
    return mTocm_ResultFinal;
}

const m_To_mm = function () {
    let m_Value = document.getElementById("meterField").value;
    let mTomm_Result = m_Value * 100;
    let mTomm_ResultFinal = parseFloat(mTomm_Result).toFixed(5);
    return mTomm_ResultFinal;
}

const m_To_mi = function () {
    let m_Value = document.getElementById("meterField").value;
    let mTomi_Result = m_Value / 1609;
    let mTomi_ResultFinal = parseFloat(mTomi_Result).toFixed(5);
    return mTomi_ResultFinal;
}

const m_To_yd = function () {
    let m_Value = document.getElementById("meterField").value;
    let mToyd_Result = m_Value * 1.094;
    let mToyd_ResultFinal = parseFloat(mToyd_Result).toFixed(5);
    return mToyd_ResultFinal;
}

const m_To_ft = function () {
    let m_Value = document.getElementById("meterField").value;
    let mToft_Result = m_Value * 3.281;
    let mToft_ResultFinal = parseFloat(mToft_Result).toFixed(5);
    return mToft_ResultFinal;
}

const m_To_in = function () {
    let m_Value = document.getElementById("meterField").value;
    let mToin_Result = m_Value * 39.37;
    let mToin_ResultFinal = parseFloat(mToin_Result).toFixed(5);
    return mToin_ResultFinal;
}


//Centimeter values

const autoConvert_cm = function () {
    let autoConv_cm = document.getElementById('centimeterField').value;

    if (autoConv_cm != '') {
        document.getElementById('kilometerField').value = (cm_To_km());
        document.getElementById('meterField').value = (cm_To_m());
        document.getElementById('millimeterField').value = (cm_To_mm());
        document.getElementById('mileField').value = (cm_To_mi());
        document.getElementById('yardField').value = (cm_To_yd());
        document.getElementById('footField').value = (cm_To_ft());
        document.getElementById('inchField').value = (cm_To_in());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('meterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('footField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const cm_To_km = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmTokm_Result = cm_Value / 100000;
    let cmTokm_ResultFinal = parseFloat(cmTokm_Result).toFixed(5);
    return cmTokm_ResultFinal;
}

const cm_To_m = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmTom_Result = cm_Value / 100;
    let cmTom_ResultFinal = parseFloat(cmTom_Result).toFixed(5);
    return cmTom_ResultFinal;
}

const cm_To_mm = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmTomm_Result = cm_Value * 10;
    let cmTomm_ResultFinal = parseFloat(cmTomm_Result).toFixed(5);
    return cmTomm_ResultFinal;
}

const cm_To_mi = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmTomi_Result = cm_Value / 160900;
    let cmTomi_ResultFinal = parseFloat(cmTomi_Result).toFixed(5);
    return cmTomi_ResultFinal;
}

const cm_To_yd = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmToyd_Result = cm_Value / 91.44;
    let cmToyd_ResultFinal = parseFloat(cmToyd_Result).toFixed(5);
    return cmToyd_ResultFinal;
}

const cm_To_ft = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmToft_Result = cm_Value / 30.48;
    let cmToft_ResultFinal = parseFloat(cmToft_Result).toFixed(5);
    return cmToft_ResultFinal;
}

const cm_To_in = function () {
    let cm_Value = document.getElementById("centimeterField").value;
    let cmToin_Result = cm_Value / 2.54;
    let cmToin_ResultFinal = parseFloat(cmToin_Result).toFixed(5);
    return cmToin_ResultFinal;
}

// Millimeter values

const autoConvert_mm = function () {
    let autoConv_mm = document.getElementById('millimeterField').value;

    if (autoConv_mm != '') {
        document.getElementById('kilometerField').value = (mm_To_km());
        document.getElementById('meterField').value = (mm_To_m());
        document.getElementById('centimeterField').value = (mm_To_cm());
        document.getElementById('mileField').value = (mm_To_mi());
        document.getElementById('yardField').value = (mm_To_yd());
        document.getElementById('footField').value = (mm_To_ft());
        document.getElementById('inchField').value = (mm_To_in());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('meterField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('footField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const mm_To_km = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmTokm_Result = mm_Value * 0.000001;
    let mmTokm_ResultFinal = parseFloat(mmTokm_Result).toFixed(5);
    return mmTokm_ResultFinal;
}

const mm_To_m = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmTom_Result = mm_Value / 1000;
    let mmTom_ResultFinal = parseFloat(mmTom_Result).toFixed(5);
    return mmTom_ResultFinal;
}

const mm_To_cm = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmTocm_Result = mm_Value / 10;
    let mmTocm_ResultFinal = parseFloat(mmTocm_Result).toFixed(5);
    return mmTocm_ResultFinal;
}

const mm_To_mi = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmTomi_Result = mm_Value / 1609000;
    let mmTomi_ResultFinal = parseFloat(mmTomi_Result).toFixed(5);
    return mmTomi_ResultFinal;
}

const mm_To_yd = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmToyd_Result = mm_Value / 914.4;
    let mmToyd_ResultFinal = parseFloat(mmToyd_Result).toFixed(5);
    return mmToyd_ResultFinal;
}

const mm_To_ft = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmToft_Result = mm_Value / 304.8;
    let mmToft_ResultFinal = parseFloat(mmToft_Result).toFixed(5);
    return mmToft_ResultFinal;
}

const mm_To_in = function () {
    let mm_Value = document.getElementById("millimeterField").value;
    let mmToin_Result = mm_Value / 25.4;
    let mmToin_ResultFinal = parseFloat(mmToin_Result).toFixed(5);
    return mmToin_ResultFinal;
}

//Mile values
const autoConvert_mi = function () {
    let autoConv_mi = document.getElementById('mileField').value;

    if (autoConv_mi != '') {
        document.getElementById('kilometerField').value = (mi_To_km());
        document.getElementById('meterField').value = (mi_To_m());
        document.getElementById('centimeterField').value = (mi_To_cm());
        document.getElementById('millimeterField').value = (mi_To_mm());
        document.getElementById('yardField').value = (mi_To_yd());
        document.getElementById('footField').value = (mi_To_ft());
        document.getElementById('inchField').value = (mi_To_in());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('meterField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('footField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const mi_To_km = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miTokm_Result = mi_Value * 1.609;
    let miTokm_ResultFinal = parseFloat(miTokm_Result).toFixed(5);
    return miTokm_ResultFinal;
}

const mi_To_m = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miTom_Result = mi_Value * 1609;
    let miTom_ResultFinal = parseFloat(miTom_Result).toFixed(5);
    return miTom_ResultFinal;
}

const mi_To_cm = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miTocm_Result = mi_Value * 160900;
    let miTocm_ResultFinal = parseFloat(miTocm_Result).toFixed(5);
    return miTocm_ResultFinal;
}

const mi_To_mm = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miTomm_Result = mi_Value * 1609000;
    let miTomm_ResultFinal = parseFloat(miTomm_Result).toFixed(5);
    return miTomm_ResultFinal;
}

const mi_To_yd = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miToyd_Result = mi_Value * 1760;
    let miToyd_ResultFinal = parseFloat(miToyd_Result).toFixed(5);
    return miToyd_ResultFinal;
}

const mi_To_ft = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miToft_Result = mi_Value * 5280;
    let miToft_ResultFinal = parseFloat(miToft_Result).toFixed(5);
    return miToft_ResultFinal;
}

const mi_To_in = function () {
    let mi_Value = document.getElementById("mileField").value;
    let miToin_Result = mi_Value * 63360;
    let miToin_ResultFinal = parseFloat(miToin_Result).toFixed(5);
    return miToin_ResultFinal;
}

//Yard values

const autoConvert_yd = function () {
    let autoConv_yd = document.getElementById('yardField').value;

    if (autoConv_yd != '') {
        document.getElementById('kilometerField').value = (yd_To_km());
        document.getElementById('meterField').value = (yd_To_m());
        document.getElementById('centimeterField').value = (yd_To_cm());
        document.getElementById('millimeterField').value = (yd_To_mm());
        document.getElementById('mileField').value = (yd_To_mi());
        document.getElementById('footField').value = (yd_To_ft());
        document.getElementById('inchField').value = (yd_To_in());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('meterField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('footField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const yd_To_km = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydTokm_Result = yd_Value * 1.609;
    let ydTokm_ResultFinal = parseFloat(ydTokm_Result).toFixed(5);
    return ydTokm_ResultFinal;
}

const yd_To_m = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydTom_Result = yd_Value / 1.094;
    let ydTom_ResultFinal = parseFloat(ydTom_Result).toFixed(5);
    return ydTom_ResultFinal;
}

const yd_To_cm = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydTocm_Result = yd_Value * 91.44;
    let ydTocm_ResultFinal = parseFloat(ydTocm_Result).toFixed(5);
    return ydTocm_ResultFinal;
}

const yd_To_mm = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydTomm_Result = yd_Value * 914.4;
    let ydTomm_ResultFinal = parseFloat(ydTomm_Result).toFixed(5);
    return ydTomm_ResultFinal;
}

const yd_To_mi = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydTomi_Result = yd_Value / 1760;
    let ydTomi_ResultFinal = parseFloat(ydTomi_Result).toFixed(5);
    return ydTomi_ResultFinal;
}

const yd_To_ft = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydToft_Result = yd_Value * 3;
    let ydToft_ResultFinal = parseFloat(ydToft_Result).toFixed(5);
    return ydToft_ResultFinal;
}

const yd_To_in = function () {
    let yd_Value = document.getElementById("yardField").value;
    let ydToin_Result = yd_Value * 36;
    let ydToin_ResultFinal = parseFloat(ydToin_Result).toFixed(5);
    return ydToin_ResultFinal;
}

//Feet values

const autoConvert_ft = function () {
    let autoConv_ft = document.getElementById('footField').value;

    if (autoConv_ft != '') {
        document.getElementById('kilometerField').value = (ft_To_km());
        document.getElementById('meterField').value = (ft_To_m());
        document.getElementById('centimeterField').value = (ft_To_cm());
        document.getElementById('millimeterField').value = (ft_To_mm());
        document.getElementById('mileField').value = (ft_To_mi());
        document.getElementById('yardField').value = (ft_To_yd());
        document.getElementById('inchField').value = (ft_To_in());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('meterField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('inchField').value = ('');
    }
}

const ft_To_km = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftTokm_Result = ft_Value / 3281;
    let ftTokm_ResultFinal = parseFloat(ftTokm_Result).toFixed(5);
    return ftTokm_ResultFinal;
}

const ft_To_m = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftTom_Result = ft_Value / 3.281;
    let ftTom_ResultFinal = parseFloat(ftTom_Result).toFixed(5);
    return ftTom_ResultFinal;
}

const ft_To_cm = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftTocm_Result = ft_Value * 30.48;
    let ftTocm_ResultFinal = parseFloat(ftTocm_Result).toFixed(5);
    return ftTocm_ResultFinal;
}

const ft_To_mm = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftTomm_Result = ft_Value * 304.8;
    let ftTomm_ResultFinal = parseFloat(ftTomm_Result).toFixed(5);
    return ftTomm_ResultFinal;
}

const ft_To_mi = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftTomi_Result = ft_Value / 5280;
    let ftTomi_ResultFinal = parseFloat(ftTomi_Result).toFixed(5);
    return ftTomi_ResultFinal;
}

const ft_To_yd = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftToyd_Result = ft_Value / 3;
    let ftToyd_ResultFinal = parseFloat(ftToyd_Result).toFixed(5);
    return ftToyd_ResultFinal;
}

const ft_To_in = function () {
    let ft_Value = document.getElementById("footField").value;
    let ftToin_Result = ft_Value * 12;
    let ftToin_ResultFinal = parseFloat(ftToin_Result).toFixed(5);
    return ftToin_ResultFinal;
}

//Inch Values

const autoConvert_in = function () {
    let autoConv_in = document.getElementById('inchField').value;

    if (autoConv_in != '') {
        document.getElementById('kilometerField').value = (in_To_km());
        document.getElementById('meterField').value = (in_To_m());
        document.getElementById('centimeterField').value = (in_To_cm());
        document.getElementById('millimeterField').value = (in_To_mm());
        document.getElementById('mileField').value = (in_To_mi());
        document.getElementById('yardField').value = (in_To_yd());
        document.getElementById('footField').value = (in_To_ft());
    } else {
        document.getElementById('kilometerField').value = ('');
        document.getElementById('meterField').value = ('');
        document.getElementById('centimeterField').value = ('');
        document.getElementById('millimeterField').value = ('');
        document.getElementById('mileField').value = ('');
        document.getElementById('yardField').value = ('');
        document.getElementById('footField').value = ('');
    }
}

const in_To_km = function () {
    let in_Value = document.getElementById("inchField").value;
    let inTokm_Result = in_Value / 39370;
    let inTokm_ResultFinal = parseFloat(inTokm_Result).toFixed(5);
    return inTokm_ResultFinal;
}

const in_To_m = function () {
    let in_Value = document.getElementById("inchField").value;
    let inTom_Result = in_Value / 39.37;
    let inTom_ResultFinal = parseFloat(inTom_Result).toFixed(5);
    return inTom_ResultFinal;
}

const in_To_cm = function () {
    let in_Value = document.getElementById("inchField").value;
    let inTocm_Result = in_Value * 2.54;
    let inTocm_ResultFinal = parseFloat(inTocm_Result).toFixed(5);
    return inTocm_ResultFinal;
}

const in_To_mm = function () {
    let in_Value = document.getElementById("inchField").value;
    let inTomm_Result = in_Value * 25.4;
    let inTomm_ResultFinal = parseFloat(inTomm_Result).toFixed(5);
    return inTomm_ResultFinal;
}

const in_To_mi = function () {
    let in_Value = document.getElementById("inchField").value;
    let inTomi_Result = in_Value / 63360;
    let inTomi_ResultFinal = parseFloat(inTomi_Result).toFixed(5);
    return inTomi_ResultFinal;
}

const in_To_yd = function () {
    let in_Value = document.getElementById("inchField").value;
    let inToyd_Result = in_Value / 36;
    let inToyd_ResultFinal = parseFloat(inToyd_Result).toFixed(5);
    return inToyd_ResultFinal;
}

const in_To_ft = function () {
    let in_Value = document.getElementById("inchField").value;
    let inToft_Result = in_Value / 12;
    let inToft_ResultFinal = parseFloat(inToft_Result).toFixed(5);
    return inToft_ResultFinal;
}





/*
Metric System Conversions

(km to m = value * 1000) && (m to km = value / 1000)
(km to cm = value * 100) && (cm to km = value / 100000)
(km to mm = value * 0.000001) && (mm to km = value / 0.000001)
(km to mi = value / 1.609) && (mi to km = value * 1.609)
(km to yd = value * 1094) && (yd to km = value / 1094)
(km to ft = value * 3281) && (ft to km = value * 3281)
(km to in = value * 39370) && (in to km = value / 39370)

(m to cm = value * 100) && (cm to m = value / 100)
(m to mm = value * 1000) && (mm to m = value / 1000)
(m to mi = value / 1609) && (mi to m = value * 1609)
(m to yd = value * 1.094) && (yd to m = value / 1.094)
(m to ft = value * 3.281) && (ft to m = value / 3.281)
(m to in = value * 39.37) && (in to m = value / 39.37)

(cm to mm = value * 10) && (mm to cm = value / 10)
(cm to mi = value / 160900) && (mi to cm = value * 160900)
(cm to yd = value / 91.44) && (yd to cm = value * 91.44)
(cm to ft = value / 30.48) && (ft to cm = value * 30.48)
(cm to in = value / 2.54) && (in to cm = value * 2.54)

(mm to mi = value / 1609000) && (mi to mm = value * 1609000)
(mm to yd = value / 914.4) && (yd to mm = value * 914.4)
(mm to ft = value / 304.8) && (ft to mm = value * 304.8)
(mm to in = value / 25.4) && (in to mm = value * 25.4)

// Imperial System Conversions

(mi to yd = value * 1760) && (yd to mi = value / 1760)
(mi to ft = value * 5280) && (ft to mi = value / 5280)
(mi to in = value * 63360) && (in to mi = value / 63360)

(yd to ft = value * 3) && (ft to yd = value / 3)
(yd to in = value * 36) && (in to yd = value / 36)
(ft to in = value * 12) && (in to ft = value / 12)

*/
