var tt=[{
    "IDtt":10001,
    "Name":"นางสาว นางสาวจันทรรัตน์ ปรีดาศิริกุล",
    "Dept":"hr",
    "Position":"ฝ่ายบุคคล",
    "salary":42000,
    "Bonus":"S",
},{
    "IDtt":10002,
    "Name":"นายภูมิพัฒน์ วัชรจิระกุล",
    "Dept":"IT",
    "Position":"System Engineer",
    "salary":13000,
    "Bonus":"A",
},{
    "IDtt":10003,
    "Name":"นางอนันตญา แสนวงศ์",
    "Dept":"Account",
    "Position":"การเงิน",
    "salary":9000,
    "Bonus":"C",
},{
    "IDtt":10004,
    "Name":"นางสาวกันสิตา มิ่งมาลา",
    "Dept":"HR",
    "Position":"ฝ่ายบุคคล",
    "salary":21000,
    "Bonus":"B",
},{
    "IDtt":10005,
    "Name":"นายกรณ์ อุดมทรัพย์",
    "Dept":"Account",
    "Position":"การเงิน",
    "salary":22000,
    "Bonus":"A",
},{
    "IDtt":10006,
    "Name":"นายจักริน ภูงาม",
    "Dept":"hr",
    "Position":"ฝ่ายบุคคล",
    "salary":12000,
    "Bonus":"S",
},{
    "IDtt":10007,
    "Name":"นางอรัญญา เหล่าสกุล",
    "Dept":"Account",
    "Position":"การเงิน",  
    "salary":14000,
    "Bonus":"A",
},{
    "IDtt":10008,
    "Name":"นางสาวสราวลี ธาราวงศ์",
    "Dept":"ITt",
    "Position":"System Account",
    "salary":50000,
    "Bonus":"C",
}]
var sum1 = 0
var sum4 = 0
var sum5 =0
var sum6 = 0
for(ttsum=0;ttsum<tt.length;ttsum++){
    if(tt[ttsum].Bonus == "S"){
        sum3 = tt[ttsum].salary*1.4;
        sum5 += sum3;
    }else if(tt[ttsum].Bonus == "A"){
        sum3 = tt[ttsum].salary*1.2;
        sum5 += sum3;
    }else if(tt[ttsum].Bonus == "B"){
        sum3 = tt[ttsum].salary*1.0;
        sum5 += sum3;
    }else if(tt[ttsum].Bonus == "C"){
        sum3 = tt[ttsum].salary*0.8;
        sum5 += sum3;
    }
    sum1 = tt[ttsum].salary*12;
    sum7 = sum1+sum3
    sum6 += sum7;
    if(sum1<200000){
    }else if(sum1>=200000&&sum1<=500000){
        sum2 = sum1*0.07;
        sum4 += sum2;
    }else if(sum1>=500000&&sum1<=1000000){
        sum2 = sum1*0.20;
        sum4 += sum2;
    }else if(sum1>1000000){
        sum2 = sum1*0.30;
        sum4 += sum2;
    }
    console.log(tt[ttsum].Name,"มีรายได้สุทธิต่อปี =",sum7,"บาท","ต้องจ่ายภาษี",sum2,"บาท","ได้โบนัส",sum3);
}
console.log("พนักงานแผนกไอที")
for(i=0;i<tt.length;i++){
    if(tt[i].Dept=="IT"){
        itsum = tt[i].salary*12;
        console.log(tt[i].Name,"ตำแหน่ง",tt[i].Position,"เงินเดือน",tt[i].salary,"รายได้ต่อปี",itsum);
    }
}
console.log("ผลประเมินS")
for(i=0;i<tt.length;i++){
    if(tt[i].Bonus=="S"){
        console.log(tt[i].Name,"ผลประเมิน",tt[i].Bonus);
    }
}
console.log("บริษัทต้องจ่ายภาษีทั้งหมด :",sum4)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :",sum5)
console.log("รายจ่ายต่อปีของบริษัท :",sum6)