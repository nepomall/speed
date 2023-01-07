$(document).ready(()=>{
    
    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    }
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    }

    // 로그인페이지 아이디 및 비밀번호 입력 토스트 팝업--------------
    function signIn(){
        const btn = $(".signIn_btn");
        
        btn.click(() =>{
            if($(".signIn_wrap input:nth-child(1)").val() == ""){
                $(".plzWrite").fadeIn(200);
                setTimeout(() => {
                    $(".plzWrite").fadeOut();
                }, 1000);
            }else if($(".signIn_wrap input:nth-child(2)").val() == ""){
                $(".plzWrite").fadeIn(200);
                setTimeout(() => {
                    $(".plzWrite").fadeOut();
                }, 1000);
            }else{
                location.href='../main/main.html';
            }
        });
    }
    signIn();


    // 회원가입 페이지 스크립트--------------------------
    function signUp(){

        // 중복확인 클릭 스크립트------------------------
        const idBtn = $(".idCheck_btn");
        const putId = $(".id_part input");
        const idComment = $(".id_part .possible");
        putId.keyup((e) => {
            if (e.target.value.length > 0) {
                idBtn.click(() =>{
                    idComment.css('display','inline');
                });
            }else{
                idComment.css('display','none');
            };
        });

        // 연락처 숫자입력 스크립트----------------------------
        $("input:text[cellPhone]").on("keyup", function () {
            $(this).val($(this).val().replace(/[^0-9-]/g, ""));
        });

        // 회원가입 버튼 활성 비활성 스크립트-------------------
        let inputObj = {
            a : "",
            b : "",
            c : "",
            d : "",
            e : "",
            f : ""
        }

        let inputBox = document.querySelectorAll('.signUp_page .input_box');
        const finalChk = $('.signUp_page #all_agree');
        const finalBtn = $('.signUp_btn');

        inputBox.forEach((item, index) => {
            let inputText = inputBox[index].firstElementChild;

            inputText.addEventListener('keyup', e =>{
                if(!!e.target.value > 0){
                    inputObj.a = $('.signUp_page #id_input').val();
                    inputObj.b = $('.signUp_page #pw1').val();
                    inputObj.c = $('.signUp_page #pw2').val();
                    inputObj.d = $('.signUp_page #name_input').val();
                    inputObj.e = $('.signUp_page #num_input').val();
                    inputObj.f = $('.signUp_page #emInput').val();
                    if(inputObj.a !== "" && inputObj.b !== "" && inputObj.c !== "" && inputObj.d !== "" && inputObj.e !== "" && inputObj.f !== ""){
                        finalChk.click(()=>{
                            if(finalChk.is(":checked")){
                                finalBtn.attr("disabled", false);
                            }else{
                                finalBtn.attr("disabled", true);
                            };
                        });
                    }else{
                        finalBtn.attr("disabled", true);
                    };
                }else{
                    finalBtn.attr("disabled", true);
                    finalChk.prop("checked", false);
                };
            });
        });

        // 이용약관, 개인정보처리방침 모달 스크립트----------------
        const openModal = {
            term : $('.term_btn'),
            info : $('.info_btn')
        }

        openModal.term.click(() =>{
            $(".term_modal").fadeIn(200);
            scrollOff();
        });
        openModal.info.click(() =>{
            $(".policy_modal").fadeIn(200);
            scrollOff();
        });

    }
    signUp();

    // 아이디찾기 페이지 스크립트----------------------------------
    function idFind(){

        //아이디찾기 버튼 활성 비활성 스크립트-------------------
        let inputObj = {
            a : "",
            b : "",
            c : ""
        };

        let inputBox = document.querySelectorAll('.idFind_page .input_box');
        const finalIn = {
            num : $('.idFind_page #num_input'),
            email : $('.idFind_page #emInput'),
            chknum : $('.idFind_page #chkNum_input')
        };
        const finalBtn = $('.idFind_btn');


        inputBox.forEach((item, index) => {
            let inputText = inputBox[index].firstElementChild;

            inputText.addEventListener('keyup', e =>{
                if(!!e.target.value > 0){
                    inputObj.a = finalIn.num.val();
                    inputObj.b = finalIn.email.val();
                    inputObj.c = finalIn.chknum.val();
                    console.log(inputObj);
                    if(inputObj.a !== "" && inputObj.b !== "" && inputObj.c !== ""){
                        finalBtn.attr("disabled", false);
                    };
                }else{
                    finalBtn.attr("disabled", true);
                };
            });
        });

        //아이디찾기 버튼 클릭 스크립트------------------
        finalBtn.click(()=>{
            const layOut = {
                normal : $('.idFind_page .input_container'),
                check : $('.idFind_page .check_container')
            };

            if(finalBtn.hasClass('active')){
                location.href='sign_in.html';
            }else{
                layOut.normal.css('display','none');
                layOut.check.css('display','block');
                finalBtn.empty();
                finalBtn.text("로그인");
                finalBtn.addClass('active');
            };
        });

        var autoHypenPhone = function(str){
            str = str.replace(/[^0-9]/g, '');
            var tmp = '';
            if( str.length < 4){
                return str;
            }else if(str.length < 7){
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3);
                return tmp;
            }else if(str.length < 11){
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 3);
                tmp += '-';
                tmp += str.substr(6);
                return tmp;
            }else{              
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 4);
                tmp += '-';
                tmp += str.substr(7);
                return tmp;
            }
        
            return str;
        }
        
        
        var phoneNum = document.getElementById('num_input');
        
        phoneNum.onkeyup = function(){
            console.log(this.value);
            this.value = autoHypenPhone( this.value ) ;  
        }

    }
    idFind();

    // 비밀번호찾기 페이지 스크립트----------------------------------
    function pwFind(){
        //비밀번호찾기 버튼 활성 비활성 스크립트-------------------
        let inputObj = {
            a : "",
            b : "",
            c : ""
        };

        let inputBox = document.querySelectorAll('.pwFind_page .input_box');
        let inputBoxSec = document.querySelectorAll('.pwFind_page .input_box2');
        const finalIn = {
            num : $('.pwFind_page #num_input'),
            id : $('.pwFind_page #id_input'),
            chknum : $('.pwFind_page #chkNum_input'),
            pwFst : $('.pwFind_page #pw1'),
            pwSec : $('.pwFind_page #pw2')
        };
        const finalBtn = $('.pwFind_btn');

        // 비밀번호 찾기 레이아웃 버튼 활성화
        inputBox.forEach((item, index) => {
            let inputText = inputBox[index].firstElementChild;

            inputText.addEventListener('keyup', e =>{
                if(!!e.target.value > 0){
                    inputObj.a = finalIn.num.val();
                    inputObj.b = finalIn.id.val();
                    inputObj.c = finalIn.chknum.val();
                    if(inputObj.a !== "" && inputObj.b !== "" && inputObj.c !== ""){
                        finalBtn.attr("disabled", false);
                    };
                }else{
                    finalBtn.attr("disabled", true);
                };
            });
        });

        // 비밀번호 변경 레이아웃 버튼 활성화
        inputBoxSec.forEach((item, index) => {
            let inputText = inputBoxSec[index].firstElementChild;

            inputText.addEventListener('keyup', e =>{
                if(!!e.target.value > 0){
                    inputObj.a = finalIn.pwFst.val();
                    inputObj.b = finalIn.pwSec.val();
                    if(inputObj.a !== "" && inputObj.b !== ""){
                        finalBtn.attr("disabled", false);
                    };
                }else{
                    finalBtn.attr("disabled", true);
                };
            });
        });

        //비밀번호찾기 버튼 클릭 스크립트------------------
        finalBtn.click(()=>{
            const layOut = {
                normal : $('.pwFind_page .input_container'),
                newPw : $('.pwFind_page .newPW_container'),
                check : $('.pwFind_page .check_container')
            };

            if(finalBtn.hasClass('active2')){
                location.href='sign_in.html';
            }else if(finalBtn.hasClass('active')){
                layOut.newPw.css('display','none');
                layOut.check.css('display','block');
                finalBtn.empty();
                finalBtn.text("로그인");
                finalBtn.removeClass('active');
                finalBtn.addClass('active2');
            }else{
                layOut.normal.css('display','none');
                layOut.newPw.css('display','block');
                finalBtn.empty();
                finalBtn.text("비밀번호 변경");
                finalBtn.addClass('active');
                finalBtn.attr("disabled", true);
            };
        });
    }
    pwFind();








});