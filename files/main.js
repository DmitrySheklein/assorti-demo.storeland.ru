// Lazy loads elements with default selector as '.lozad'
$(function(){
  lozad().observe();
})
// WOW init
$(function(){
  new WOW().init();
})
// Fancybox default
$.fancybox.defaults.lang = "ru";
$.fancybox.defaults.i18n = {
    ru: {
        CLOSE: "Закрыть",
        NEXT: "Вперёд",
        PREV: "Назад",
        ERROR: "Контент не может быть загружен. <br/> Пожалуйтста попробуйте ещё раз.",
        DOWNLOAD: "Скачать",
        SHARE: "Поделиться",
        ZOOM: "Увеличить"
    }
};
$.fancybox.defaults.wheel = false;
$.fancybox.defaults.keyboard = false;
$.fancybox.defaults.smallBtn = true;
$.fancybox.defaults.animationEffect = 'fade';
$.fancybox.defaults.transitionEffect = false;
$.fancybox.defaults.hideScrollbar = true;
$.fancybox.defaults.toolbar = false;
$.fancybox.defaults.infobar = false;
$.fancybox.defaults.touch = false;
$.fancybox.defaults.buttons = [
    "close"
]
// Noty default
Noty.overrideDefaults({
  layout: "bottomRight",
  theme: 'sunset',
  timeout: "3000",
  killer: true,
  progressBar: true,
  animation: {
    open: 'animated slideInUp', 
    close: 'animated slideOutDownNew'
  }
});  
// Hover карусель изображений
$(function(){
  $(".mouseHoverImgCarousel").HoverMouseCarousel();
})
// jQuery Validation Plugin
$(function(){
  $.validator.setDefaults({
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    }
  });
})
// Возвращает правильное окончание для слова
function genWordEnd(num, e, m, mm) {
  // Если забыли указать окончания
  if(typeof (e) == "undefined") { e = ''; }
  if(typeof (m) == "undefined") { e = 'а'; }
  if(typeof (mm) == "undefined"){ e = 'oв'; }
  // Если передали пустую строку, вместо цифры
  if(0 == num.length) { num = 0; }
  // Превращаем цифру в правильный INT
  num = GetSum(num).toString();
  // Получаем последний символ цифры
  ch1 = num.substring(num.length-1);
  // Получаем последний символ цифры
  ch2 = num.length == 1 ? 0 : num.substring(num.length-2, num.length-1);
  // Если последняя цифра - 1, вернем единственное число
  if(ch2!=1 && ch1==1)               {return e;}
  // Если последняя цифра - от 2 до 4х , вернем множественное чило из массива с индексом 2
  else if(ch2!=1 && ch1>1 && ch1<=4) {return m;}
  // Если последняя цифра - от 5 до 0 , вернем множественное чило из массива с индексом 3
  else if(ch2==1 || ch1>4 || ch1==0) {return mm;}
}

// Считает сумму  33 599,65 + 2000 - 1910-41,6
function GetSum(val,precision) {
  if(typeof (precision) == "undefined" || precision < 0) { precision = 0; }
  // Возводим в степень точности 10 для округления
  var p = Math.pow(10,precision);  
  try {return Math.round(parseFloat(eval(val.toString().replace(/\s/gi, "").replace(/,/gi, ".")))*p)/p;} catch (e) {return 0;}
}

// Форматирует цену
function number_format(n,e,t,r){var i=n,a=e,o=function(n,e){var t=Math.pow(10,e);return(Math.round(n*t)/t).toString()};i=isFinite(+i)?+i:0,a=isFinite(+a)?Math.abs(a):0;var u,d,f="undefined"==typeof r?",":r,h="undefined"==typeof t?".":t,l=a>0?o(i,a):o(Math.round(i),a),s=o(Math.abs(i),a);s>=1e3?(u=s.split(/\D/),d=u[0].length%3||3,u[0]=l.slice(0,d+(0>i))+u[0].slice(d).replace(/(\d{3})/g,f+"$1"),l=u.join(h)):l=l.replace(".",h);var c=l.indexOf(h);return a>=1&&-1!==c&&l.length-c-1<a?l+=new Array(a-(l.length-c-1)).join(0)+"0":a>=1&&-1===c&&(l+=h+new Array(a).join(0)+"0"),l}
// Добавляет пробел 1000 -> 1 000  /  10000 -> 10 000 
function addSpaces(nStr){
  if(typeof nStr == 'number'){
	  nStr = String(nStr);
  }

  return nStr.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
} 
// Проверка вводимых значений в количестве товара
function keyPress(oToCheckField, oKeyEvent) {
  return oKeyEvent.charCode === 0 || /\d/.test(String.fromCharCode(oKeyEvent.charCode));
}

// Функция определения браузера
$(function() {
  var user = detect.parse(navigator.userAgent);
  if (user.browser.family === 'Safari') {
    $('body').addClass('Safari');
  }
  if (user.browser.family === 'IE') {
    $('body').addClass('IE');
  }
  if (user.browser.family === 'Firefox') {
    $('body').addClass('Firefox');
  }
  if (user.browser.family === 'Opera') {
    $('body').addClass('Opera');
  }
  if (user.browser.family === 'Chrome') {
    $('body').addClass('Chrome');
  }
  if (user.browser.family === 'Edge') {
    $('body').addClass('Edge');
  }
});

// Функция определения ширины экрана пользователя
function getClientWidth() {return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth;}

// Работа с cookie файлами. 
// Получение переменной из cookie
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Установка переменной в cookie
function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;
  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires*1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) { 
    options.expires = expires.toUTCString();
  }
  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;
  for(var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];    
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

// Удаление переменной из cookie
function deleteCookie(name, options ) {
  options = options || {};
  options.expires = -1;
  setCookie(name, "", options)
}

// Отправляет ошибку на сервер, для того чтобы служба тех поддержки могла разобраться в проблеме как можно быстрее.
function sendError (desc, page, line) {
  var img=document.createElement('img');
  img.src = 'https://storeland.ru/error/js?desc='+encodeURIComponent(desc)+'&page='+encodeURIComponent(window.location)+'&line=0';
  img.style.position = 'absolute';
  img.style.top = '-9999px';
  try { document.getElementsByTagName('head').appendChild(img) } catch (e){}
  return false;
}

// Превращает поле пароля в текстовое поле и обратно
// @LinkObject - ссылка по которой кликнули
// @InputObject - объект у которого нужно изменить тип поля
function ChangePasswordFieldType (LinkObject, InputObject) {
  var 
    // Ссылка по которой кликнули
    LObject = $(LinkObject),
    // Объект у которого изменяем тип с password на text
    IObject = $(InputObject),
    // Старый текст ссылки
    txtOld = LObject.html(),
    // Новый текст ссылки
    txtNew = LObject.attr('rel');
  // Если объекты не получены, завершим работу функции
  if( LObject.length==0 || IObject.length==0 ) {
    return false;
  }
  // Изменяем у ссылки текст со старого на новый
  LObject.html(txtNew);
  // Старый текст ссылки сохраняем в атрибуте rel 
  LObject.attr('rel', txtOld);
  // Изменяем тип input поля
  if(IObject[0].type == 'text') {
    IObject[0].type = 'password';
  } else {
    IObject[0].type = 'text';
  }
}

// Крутит изображение при обновлении картинки защиты от роботов
function RefreshImageAction(img,num,cnt) {
  if(cnt>13) { return false; }
  $(img).attr('src', $(img).attr('rel') + 'icon/refresh/' + num + '.gif');
  num = (num==6)?0:num;
  setTimeout(function(){RefreshImageAction(img, num+1, cnt+1);}, 50);
}
// Добавление в сравнение и избранное
function addTo() {
  // Добавление/удаление товара на сравнение/избранное через ajax
  $('.add-compare').click(function(){
    // Объект ссылки, по которой кликнули
    var 
      a = $(this)
      ,addUrl = a.attr('data-action-add-url')
      ,delUrl = a.attr('data-action-delete-url')
      ,addTitle = a.attr('data-action-add-title')
      ,delTitle = a.attr('data-action-delete-title')
      ,isAdd = a.attr('data-action-is-add')
      ,pName = a.attr('data-prodname')
      ,pImage = a.attr('data-prodimage')
      ,pPrice = a.attr('data-mod-id-price')
      ,pUrl = a.attr('data-produrl')
      ,pDataid = a.attr('data-id')
      ,pDataprice = a.attr('data-mod-id')
      ,pDataGoodsid = a.attr('data-goodsid')
      ,aText = a.parent().find('.add-compare')
      ,addTooltip = a.attr('data-add-tooltip')
      ,delTooltip = a.attr('data-del-tooltip')
      requestUrl = a.attr('href')
    ;
    var flag = 0;
    $('#compare-items li.item').each(function(){   
      if($(this).attr('data-id') == pDataid){  
      flag = 1;
      }
      if(flag == 1){
        $(this).remove();
        return false;
      }
      return flag;
    });
    $('.compare #compare-items .empty').hide();
    $('.compare #compare-items .actions').show();
    
    // Если в ссылке присутствует идентификатор, который мы можем узнать только вытащив его с текущей страницы
    if( /GET_GOODS_MOD_ID_FROM_PAGE/.test(requestUrl)) {
      requestUrl = requestUrl.replace(new RegExp('GET_GOODS_MOD_ID_FROM_PAGE'), $('.goodsDataMainModificationId').val());
    }
    
    // Если есть информация о том какие URL адреса будут изменены, то можено не перегружать страницу и сделать запрос через ajax
    if(addUrl && delUrl) {
      $.ajax({
        type : "POST",
        dataType: 'json',
        cache : false,
        url : requestUrl,
        data : {
          'ajax_q': 1
        },
        success: function(data) {
          if(flag == 0){   
            $('#compare-items .compare-items-list').prepend(
                "<li class=\"item\" data-id=\"" + pDataid +  "\">" +
                    "<a data-href=\"" + delUrl + "?id=" + pDataprice + "\" data-goods-mod-id=\"" + pDataprice + "\" class=\"remove item-remove\" title=\"Убрать товар из списка сравнения\" onclick=\"removeFromCompare($(this))\"></a>" +
                    "<a href=\"" + pUrl + "\" title=\"" + pName + "\" class=\"product-image\">" + 
                      "<img src=\"" + pImage + "\" alt=\"" + pName + "\" class=\"goods-image-icon\">" +
                    "</a>" + 
                    "<div class=\"product-details\">" + 
                      "<p class=\"product-name\">" + 
                        "<a href=\"" + pUrl + "\" title=\"" + pName + "\">" + pName + "</a>" +
                      "</p>" + 
                      "<span class=\"price RUB\" data-price=\"" + pPrice + "\"><span><span class=\"num\">" + addSpaces(String(pPrice)) + "&nbsp;</span></span></span>"+
                    "</div>"+
                "</li>"
              );
          }
          if('ok' == data.status) {
            if(isAdd == 1) {
              var 
                from = addUrl
                ,to = delUrl
                ,newIsAddStatus = 0
                ,newTitle = delTitle ? delTitle : ''
                ,newTooltip = delTooltip ? delTooltip : ''
              ;
              a.addClass('added');
            } else {
              var 
                from = delUrl
                ,to = addUrl
                ,newIsAddStatus = 1
                ,newTitle = addTitle ? addTitle : ''
                ,newTooltip = addTooltip ? addTooltip : ''
              ;
              a.removeClass('added');
            }
            
            // Если указано, что изменилось число товаров на сравнении
            if(typeof(data.compare_goods_count) != 'undefined') {
              // Блок информации о том, что есть товары на сравнении
              var sidecount = $('.compare .count');
              // Если на сравнении больше нет товаров
              // Указываем информацию о новом количестве товаров на сравнении
              // Блок обновления списка сравнения в каталога
              sidecount.animate({opacity: 0,display: "none"},500,function(){
              sidecount.text(data.compare_goods_count);                 
                if(data.compare_goods_count > 0){
                  $('.compare').addClass('have-items');
                  $('.compare #compare-items .empty').hide();
                  $('.compare #compare-items .actions').show();              
                }else{
                  $('.compare').removeClass('have-items');
                  $('.compare #compare-items .empty').show();
                  $('.compare #compare-items .actions').hide();               
                }
              }).animate({display: "inline",opacity: 1} , 500 );
            }
            
            // Обновляем ссылку, на которую будет уходить запрос и информацию о ней
            a.attr('href', a.attr('href').replace(new RegExp(from), to))
             .attr('title', newTitle)
             .attr('data-tooltip', newTooltip)
             .attr('data-action-is-add', newIsAddStatus);
          }
          
          var msgType = ('ok' == data.status) ? 'success' : 'error';
          var message = ('ok' == data.status) ? data.message.replace('сравнения', '<a href="/compare" class="underline">сравнения</a>') : data.message;
          // Если есть функция, которая отображает сообщения пользователю
          if(typeof(Noty) == "function") {
            new Noty({
              text: message,
              type: msgType,
              layout: "bottomRight",
              timeout: "2000"             
            }).show();                
          }

        }
      });
      return false;
    }
  });

  // Добавление/удаление товара на сравнение/избранное через ajax
  $('.add-wishlist').click(function(){
    // Объект ссылки, по которой кликнули
    var 
      a = $(this)
      ,addUrl = a.attr('data-action-add-url')
      ,delUrl = a.attr('data-action-delete-url')
      ,addTitle = a.attr('data-action-add-title')
      ,delTitle = a.attr('data-action-delete-title')
      ,isAdd = a.attr('data-action-is-add')
      ,aText = a.parent().find('.add-wishlist')
      ,pName = a.attr('data-prodname')
      ,pImage = a.attr('data-prodimage')
      ,pUrl = a.attr('data-produrl')
      ,pDataid = a.attr('data-id')
      ,pDataprice = a.attr('data-mod-id')
      ,pPrice = a.attr('data-mod-id-price')
      ,pDataGoodsid = a.attr('data-goodsid')
      ,addTooltip = a.attr('data-add-tooltip')
      ,delTooltip = a.attr('data-del-tooltip')
      requestUrl = a.attr('href')
    ;
    var flag = 0;
    $('#favorites-items li').each(function(){       
      if($(this).attr('data-id') == pDataid){  
      flag = 1;
      }
      if(flag == 1){
        $(this).remove();
        return false;
      }
      return flag;
    });

    
    // Если в ссылке присутствует идентификатор, который мы можем узнать только вытащив его с текущей страницы
    if( /GET_GOODS_MOD_ID_FROM_PAGE/.test(requestUrl)) {
      requestUrl = requestUrl.replace(new RegExp('GET_GOODS_MOD_ID_FROM_PAGE'), $('.goodsDataMainModificationId').val());
    }
    
    // Если есть информация о том какие URL адреса будут изменены, то можено не перегружать страницу и сделать запрос через ajax
    if(addUrl && delUrl) {
      $.ajax({
        type : "POST",
        dataType: 'json',
        cache : false,
        url : requestUrl,
        data : {
          'ajax_q': 1
        },
        success: function(data) {
          if(data.status != 'error'){
            $('.favorites #favorites-items .empty').hide();
            $('.favorites #compare-items .actions').show();            
          }
          
          if(flag == 0 && data.status != 'error'){   
            $('#favorites-items .favorites-items-list').prepend(
              "<li class=\"item\" data-id=\"" + pDataid +  "\">" + 
                "<a data-href=\"" + delUrl + "?id=" + pDataprice + "\" data-goods-mod-id=\"" + pDataprice + "\" class=\"remove item-remove\" title=\"Убрать товар из списка сравнения\" onclick=\"removeFromFavorites($(this))\"></a>"+
                "<a href=\"" + pUrl + "\" title=\"" + pName + "\" class=\"product-image\">"+
                  "<img src=\"" + pImage + "\" alt=\"" + pName + "\" class=\"goods-image-icon\">"+
                "</a>"+
                "<div class=\"product-details\">"+
                  "<p class=\"product-name\">"+
                    "<a href=\"" + pUrl + "\" title=\"" + pName + "\">" + pName + "</a>"+
                  "</p>"+
                  "<span class=\"price RUB\" data-price=\"" + pPrice + "\"><span><span class=\"num\">" + addSpaces(String(pPrice)) + "&nbsp;</span></span></span>"+
                "</div>"+
              "</li>"
            );
          }
          if('ok' == data.status) {
            if(isAdd == 1) {
              var 
                from = addUrl
                ,to = delUrl
                ,newIsAddStatus = 0
                ,newTitle = delTitle ? delTitle : ''
                ,newTooltip = delTooltip ? delTooltip : ''
              ;
              a.addClass('added');
            } else {
              var 
                from = delUrl
                ,to = addUrl
                ,newIsAddStatus = 1
                ,newTitle = addTitle ? addTitle : ''
                ,newTooltip = addTooltip ? addTooltip : ''
              ;
              a.removeClass('added');
            }
            
            // Если указано, что изменилось число товаров на сравнении
            if(typeof(data.favorites_goods_count) != 'undefined') {
              // Блок информации о том, что есть товары на сравнении
              var sidecount = $('.favorites .count');
              // Если на сравнении больше нет товаров
              // Указываем информацию о новом количестве товаров на сравнении
              // Блок обновления списка сравнения в каталога
              sidecount.animate({opacity: 0,display: "none"},500,function(){
              sidecount.text(data.favorites_goods_count);                 
                if(data.favorites_goods_count > 0){
                  $('.favorites').addClass('have-items');
                  $('.favorites #favorites-items .empty').hide();
                  $('.favorites #favorites-items .actions').show();                     
                }else{
                  $('.favorites').removeClass('have-items');
                  $('.favorites #favorites-items .empty').show();
                  $('.favorites #favorites-items .actions').hide();                   
                }
              }).animate({display: "inline",opacity: 1} , 500 );
            }
            
            // Обновляем ссылку, на которую будет уходить запрос и информацию о ней
            a.attr('href', a.attr('href').replace(new RegExp(from), to))
             .attr('title', newTitle)
             .attr('data-tooltip', newTooltip)
             .attr('data-action-is-add', newIsAddStatus);
          }
          
          var msgType = ('ok' == data.status) ? 'success' : 'error';
          var message = ('ok' == data.status) ? data.message.replace('избранное', '<a href="/user/favorites" class="underline">избранное</a>') : data.message;
          // Если есть функция, которая отображает сообщения пользователю
          if(typeof(Noty) == "function") {
            new Noty({
              text: message,
              type: msgType,
              layout: "bottomRight",
              timeout: "2000"             
            }).show();                
          }
          
        }
      });
      return false;
    }
  });
}
// Сравнение товаров
function comparePage(){
  // Сравнение товаров. Инвертирование свойств для сравнения товара
  $('.CompareCheckbox.invert').click(function(){
    var checked = true,
    checkboxes = $('.CompareCheckbox:not(.invert)');
    checkboxes.each(function(){
      if($(this).attr('checked')) {
        checked = false;
        return false;
      }
    });
    checkboxes.each(function(){
      $(this).attr('checked', checked);
    });
    $(this).attr('checked', checked);
  });
  
  // Сравнение товаров. Скрытие характеристик товара, которые выделил пользователь
  $('.CompareGoodsHideSelected').click(function(){
    $('.CompareGoodsTableTbodyComparisonLine').each(function(){
      var CheckedCheckbox = $(this).find('.CompareCheckbox:checked:not(.invert)');
      if(CheckedCheckbox.length>0) {
        $(this).hide();
      }
    });
    // отменяем выделение характеристик товаров
    $('.CompareCheckbox').attr('checked',false);
    return false;
  });
  
  // Сравнение товаров. Скрытие характеристик товара, которые выделил пользователь
  $('.CompareGoodsHideSelected').click(function(){
    $('.CompareGoodsShowAll').show();
    $('.CompareGoodsTableTbodyComparisonLine').each(function(){
      var CheckedCheckbox = $(this).find('.CompareCheckbox:checked:not(.invert)');
      if(CheckedCheckbox.length>0) {
        $(this).hide();
      }
    });
    // отменяем выделение характеристик товаров
    $('.CompareCheckbox').attr('checked',false);
    return false;
  });
  
  // Сравнение товаров. Отображение скрытых характеристик товара
  $('.CompareGoodsShowAll').click(function(){
    $(this).hide();
    $('.CompareGoodsTableTbodyComparisonLine:hidden').show();
    return false;
  });
  
  // Сравнение товаров. Верхняя навигация изменение фильтра на отображение всех характеристик товаров
  $('.CompareGoodsTableFilterShowAll').click(function(){
    $('.CompareGoodsTableFilterSelected').removeClass('CompareGoodsTableFilterSelected');
    $('.CompareGoodsTableTbodyComparisonLine:hidden').show();
    $(this).addClass('CompareGoodsTableFilterSelected');
    return false;
  });

  // Сравнение товаров. Фильтр в верхней навигации. Отображение только различающихся характеристик товара
  $('.CompareGoodsTableFilterShowOnlyDifferent').click(function(){
    $('.CompareGoodsTableFilterSelected').removeClass('CompareGoodsTableFilterSelected');
    $('.CompareGoodsTableTbodyComparisonLine:not(.same)').show();
    $('.CompareGoodsTableTbodyComparisonLine.same').hide();
    $(this).addClass('CompareGoodsTableFilterSelected');
    return false;
  });
  
  // При клике по строке выделяем свойство
  $('.CompareGoodsTableTbodyComparisonLine td:not(.cell)').click(function(){
    var CompareCheckbox = $(this).parent().find('.CompareCheckbox');
    if(CompareCheckbox.attr('checked')) {
      CompareCheckbox.attr('checked', false);
    } else {
      CompareCheckbox.attr('checked', true);
    }
  });
  
  function compareGetVars () {
    return new Array(
      $('.CompareGoodsTableTbody tr:first td').length - 1,
      parseInt($('.CompareGoodsTableTbody tr:first td:visible:not(.cell)').attr('class').replace(new RegExp('compare\-td compare\-td\-'), '')),
      parseInt($('.CompareGoodsTableTbody tr:first td:visible:last').attr('class').replace(new RegExp('compare\-td compare\-td\-'), ''))
    );
  }
  
  // Прокрутка списка сравнения вправо
  $('.CompareGoodsTableNext').click(function(){
    // Определяем используемые поля
    var data = compareGetVars(); 
    // Изменяем их если это возможно.
    if(data[0] > data[2]) {
      $('.compare-td-' + data[1]).hide();
      $('.compare-td-' + (data[2] + 1)).show();
      if((data[2] + 1) >= data[0]) {
        $(this).find('a').addClass('disable');
      }
      if(data[1] + 1 != 1) {
        $('.CompareGoodsTablePrev a').removeClass('disable');
      }
    }
    return false;
  });
  
  // Прокрутка списка сравнения влево
  $('.CompareGoodsTablePrev').click(function(){
    // Определяем используемые поля
    var data = compareGetVars(); 
    // Изменяем их если это возможно.
    if(1 < data[1]) {
      $('.compare-td-' + (data[1] - 1)).show();
      $('.compare-td-' + data[2]).hide();
      if((data[1] - 1) <= 1) {
        $(this).find('a').addClass('disable');
      }
      if(data[2] - 1 != data[0]) {
        $('.CompareGoodsTableNext a').removeClass('disable');
      }
    }
    return false;
  });
}

// Показать пароль 
$(function(){
  $('.showPass').click(function(){
    ChangePasswordFieldType(this, $('#sites_client_pass'));
    return false;
  });
});

// Основные функции
function mainFunctions() {
  // Валидация формы на странице оформления заказа, а так же формы на страницы связи с администрацией
  $("#order-stage-form, .feedback-form, .subscribe-footer__form, .clientForm").validate();
  
  $('.subscribe .subscribe__form').validate()
  $('.callback-form').validate()
  $('.offer-form').validate()
  // Возврашаем пользователя на страницу с которой был сделан обратный звонок
  $('.callbackredirect').val(document.location.href);
  // AJAX обратные звонки
  $('.subscribe .subscribe__form, .callback-form, .offer-form, .subscribe-footer .subscribe-footer__form').on('submit', function(e){
    e.preventDefault();
    
    var $form = $(this);
    var url = $form.prop('action');
    var formData = $form.serializeArray();
    formData.push({name: 'ajax_q', value: 1});
    formData.push({name: 'only_body', value: 1});

    if($form.valid()){
      $.getJSON(url, formData, function(d){
        var notyText = (d.status == 'ok') ? d.message : 'Произошла ошибка, попробуйте ещё раз';
        var notyType = (d.status == 'ok') ? 'success' : 'error';
        
        new Noty({
          text: '<div class="noty_content">'+ notyText +'</div>',
          type: notyType
        }).show()
        
        if(d.status == 'ok'){
          $form.find('.input').val('');
        }
      })
    }
    
  })
  // Добавление товара в корзину
  $(document).on('click', '.button._add-cart:not(.quickviewmod)', function() {
    var $btn  = $(this);
    $btn.addClass('_loading')
    $btn.find('span').html('<i class="fal fa-circle-notch fa-spin"></i>')
    
    var $form = $(this).closest('form');
    
    // Включить появление корзины по клику на кнопку "Купить"
    // if (!$(this).hasClass('_to-cart')) {      $(this).addClass('_quick');    }
    
    if ($(this).hasClass('_quick')) {
      $form.attr('rel', 'quick');
    } else {
      var rel = $form.attr('rel');
      
      if (rel) {
        $form.attr('rel', rel.replace('quick', ''));
      }
    }
    $form.trigger('submit');
    return (false);
  })
  
  // Отправка формы по Ctrl+Enter
  $('form').bind('keypress', function(e){
    if((e.ctrlKey) && ((e.which==10)||(e.which==13))) {$(this).submit();}
  // Отправка данных формы по нажатию на Enter в случае если курсор находится в input полях (В некоторых браузерах при нажатии по enter срабатывает клик по первому submit полю, которое является кнопкой назад. Для этого написан этот фикс)
  }).find('input').bind('keypress', function(e){
    if(((e.which==10)||(e.which==13))) { try{$(this.form).submit();} catch(e){} return false; }
  });
  // Фикс меню
  $(".header .header__menu").stick_in_parent({
    parent: '.wrapper',
    sticky_class: '_sticky'
  });
  // Кнопка меню на мобильном
  var $headerNavButton = $('.header .header-nav__button');
  $headerNavButton.click(function(e){
    e.preventDefault();
    $(this).find('.header-nav__button-icon').toggle();
    $('.header-nav__list').toggleClass('_active');
  })
  // Скролл по ссылкам
  $('.header-nav .header-nav__link').click(function(e) {
  		var href = $(this).attr('href');
  		var navHeight = $(this).closest('.header__menu').outerHeight()
  		// Если href ссылки начинается на # - скроллим
  		if(href.indexOf('#') != -1) {
  		  e.preventDefault();
  		  $.scrollTo(href, {duration:800, offset: -navHeight});
  		  // $(this).parent().addClass('_active').siblings().removeClass('_active')
  		  $headerNavButton.trigger('click')
  		}
  });

}

// Функции для каталога
function catalogFunctions() {
  // Кастом селект
  $(function(){if(!$('html').hasClass('ios')){$('select').styler();}})    
  
  // Фильтр по ценам
  var
    // Минимальное значение цены для фильтра
    priceFilterMinAvailable = parseInt($('.goodsFilterPriceRangePointers .min').text())
    // Максимальное значение цены для фильтра
    ,priceFilterMaxAvailable = parseInt($('.goodsFilterPriceRangePointers .max').text())
    // Максимальное значение цены для фильтра
    ,priceSliderBlock = $('#goods-filter-price-slider')[0]
    // Поле ввода текущего значения цены "От"
    ,priceInputMin = $( "#goods-filter-min-price" )
    // Поле ввода текущего значения цены "До"
    ,priceInputMax = $( "#goods-filter-max-price" )
    // Блок с кнопкой, которую есть смысл нажимать только тогда, когда изменялся диапазон цен.
    ,priceSubmitButtonBlock = $( ".goodsFilterPriceSubmit" );
    
  // Изменяет размер ячеек с ценой, т.к. у них нет рамок, есть смысл менять размеры полей ввода, чтобы они выглядили как текст
  function priceInputsChangeWidthByChars() {
    // Если есть блок указания минимальной цены
    if(priceInputMin.length) {
      priceInputMin.css('width', (priceInputMin.val().length*7 + 60) + 'px');
      priceInputMax.css('width', (priceInputMax.val().length*7 + 60) + 'px');
    }
  }
  // Обновить размеры полей ввода диапазона цен
  priceInputsChangeWidthByChars();

  // Слайдер, который используется для удобства выбора цены
  if(priceSliderBlock){
    noUiSlider.create(priceSliderBlock, {
        start: [parseInt($('#goods-filter-min-price').val()), parseInt($('#goods-filter-max-price').val())],
        connect: true,
        range: {
            'min': priceFilterMinAvailable,
            'max': priceFilterMaxAvailable
        }
    });
    priceSliderBlock.noUiSlider.on('slide', function (values, handle) {
      var newVal = parseInt(values[handle]);
  
      /*
      * 0 - left handle
      * 1 - right handle
      */ 
      if (handle) {
          priceInputMax.val( newVal );    
      } else {
          priceInputMin.val( newVal );
      }
      
      priceInputsChangeWidthByChars();
    });
    
    // При изменении минимального значения цены
    priceInputMin.keyup(function(){
      var newVal = parseInt($(this).val());
      if(newVal < priceFilterMinAvailable) {
        newVal = priceFilterMinAvailable;
      }
      priceSliderBlock.noUiSlider.set([newVal, null]);
      priceInputsChangeWidthByChars();
    });
    
    // При изменении максимального значения цены
    priceInputMax.keyup(function(){
      var newVal = parseInt($(this).val());
      if(newVal > priceFilterMaxAvailable) {
        newVal = priceFilterMaxAvailable;
      }
      priceSliderBlock.noUiSlider.set([null, newVal]);
      priceInputsChangeWidthByChars();
    });
  }
  
  // Фильтры по товарам. При нажании на какую либо характеристику или свойство товара происходит фильтрация товаров
  $('.filters-goods input').click(function(){
    $(this)[0].form.submit();
    
    return;
    
  });

  $('.filters-goods-active input').click(function(){
    $(this)[0].form.submit();
  });
  
  
  // Показать/скрыть категорию фильтра
  $('.block.filters').on('click', '.title', function(){
    var $title = $(this);
    
    if($(this).hasClass('_main')){
      return;
    }
    
    $title.toggleClass('active').next('.layout-slider, .filter-inner').slideToggle();
  });
  
  $('.block.filters, .block.viewed').on('click', '.title', function(){
    if( getClientWidth() <= 991) {
      var $title = $(this);
      
      $title.next('.content').addClass('_active');
      $('.overlay').addClass('_active');        
    }
  })
  
  $('.overlay, .content-close-btn').off('click').on('click', function(){
    $('.overlay').removeClass('_active');
    $('.filters .content, .viewed  .content').removeClass('_active');
  })
  
  // Показать все/скрыть
  $('.block.filters').on('click', '.filter-more', function(){
    var $btn = $(this);
    var offsetTop = $btn.siblings('.title').offset().top

    $btn.prev('.filter-inner').toggleClass('crop');
    
    if($btn.hasClass('active')){
      $btn.removeClass('active').find('.filter-moreText').text('Показать все');
      
      if(getClientWidth() > 992){
        $('html, body').animate({scrollTop: offsetTop})
      }
      
    } else {
      $btn.addClass('active').find('.filter-moreText').text('Скрыть');
    }
  }); 

}

// Добавление товара в корзину
function addCart() {
  $('.product-view__form, .product__form, .goodsToCartFromCompareForm, .goodsListForm').off('submit').submit(function() {
    // Находим форму, которую отправляем на сервер, для добавления товара в корзину
    var formBlock = $($(this).get(0));
    var isQuick = (formBlock.attr('rel') == 'quick') ? true : false;
    
    // Проверка на существование формы отправки запроса на добавление товара в корзину
    if (1 > formBlock.length || formBlock.get(0).tagName != 'FORM') {
      alert('Не удалось найти форму добавления товара в корзину');
      return false;
    }
    
    // Получаем данные формы, которые будем отправлять на сервер
    var formData = formBlock.serializeArray();
    // Сообщаем серверу, что мы пришли через ajax запрос
    formData.push({name: 'ajax_q', value: 1});
    // Так же сообщим ему, что нужно сразу отобразить форму быстрого заказа
    //formData.push({name: 'fast_order', value: 1});
    // Аяксом добавляем товар в корзину и вызываем форму быстрого заказа товара
    $.ajax({
      type: "POST",
      cache: false,
      url: formBlock.attr('action'),
      data: formData,
      success: function(data) {
          var $btn = $('.button._add-cart._loading').removeClass('_loading');
          var $cartMessage = $(data).filter('#cart-message');
          var type = $cartMessage.data('message-type');
          
          // Если товар добавлен
          if(type === 'success'){
            $btn.addClass('_added').find('span').html('<i class="fal fa-check-circle"></i>');
            $('.header .cart-header .cart-header__counter .num').html($(data).filter('#newCartCount').html());
            $('.header .cart-header .cart-header__cart-sum .num').html($(data).filter('#newCartSum').html());
            // Показываем корзину
            if (isQuick){
              loadAjaxCart()
            }
          } else {
            new Noty({
              timeout: "3000",
              layout: 'center',
              text: $cartMessage.html(),
              type: type,
              animation: {
                open: null, 
                close: null
              }            
            }).show();
            
            $btn.addClass('_added').find('span').html('<i class="fal fa-times-circle"></i>');            
          }
          setTimeout(function(){
            if($btn.hasClass('_product-view-add-cart') && $btn.hasClass('_quick')) {
              $btn.removeClass('_added').find('span').html('Быстрый заказ')
              
              return false;
            }
            $btn.removeClass('_added').find('span').html('Купить')
          }, 2500);
      }
    });
    return false;
  });
}

// Скрипты страницы просмотра заказа
function orderInfoPage(){
  $('.inputText').addClass('input')
  // Кастом селект
  $(function(){if(!$('html').hasClass('ios')){$('select').styler();}})   
}
// Cкрипты для быстрого заказа
function orderScripts(){
  // Кастом селект
  $(function(){if(!$('html').hasClass('ios')){$('.quickform__select, .quickform__select-convenient').styler();}}) 
  
  // Выбор даты доставки
  // Документация к плагину //t1m0n.name/air-datepicker/docs/index-ru.html
  $("#deliveryConvenientDate").datepicker({
    // Если true, то при активации даты, календарь закроется.
    autoClose: true,
    // Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
  })
  // Подсчёт количества полей
  $(function(){
    var $list = $('.quickform__row.-adress .quickform__list').first();
    var notSmallLength = $list.find('.quickform__item').filter(':not(.-small)').length;
    
    $list.addClass('_'+ notSmallLength);
    
    if($list.find('.quickform__item').filter('.-third').length) {
      $list.addClass('_with-third');
    } else {
      $list.addClass('_not-third');
    }
    
  })  
  // Разделение поле адрес на Улица, Дом, Квартира
  $('#quickform .button').click(function(){
    var $quickDeliveryAddress = $('#quickDeliveryAddress'),
        quickDeliveryAddressStreetValue = $('#quickDeliveryAddressStreet').val(),
        quickDeliveryAddressHomeValue = $('#quickDeliveryAddressHome').val(),
        quickDeliveryAddressFlatValue = $('#quickDeliveryAddressFlat').val();
    
    if(!$quickDeliveryAddress.length){
      return;
    }
    
    if(quickDeliveryAddressStreetValue !='' || quickDeliveryAddressHomeValue !='' || quickDeliveryAddressFlatValue !=''){
      if ($quickDeliveryAddress.val().match( /(.*)(улица)+(.*)/i )) {
        $quickDeliveryAddress.val(null);
      }
      $quickDeliveryAddress.val('Улица: ' + quickDeliveryAddressStreetValue + ', Дом/Корпус: ' + quickDeliveryAddressHomeValue + ', Квартира: ' + quickDeliveryAddressFlatValue);
      $(this).submit();
      return false;
    }
  });
  // Валидация формы на странице оформления заказа
  $("#quickform").submit(function(){
    // Если форма невалидна не отправляем её на сервер
    if(!$(this).valid()) {
      return false;
    }
    // Получаем данные формы, которые будем отправлять на сервер
    var formData = $(this).serializeArray();
    // Сообщаем серверу, что мы пришли через ajax запрос
    formData.push({name: 'ajax_q', value: 1});
    // Аяксом добавляем товар в корзину и вызываем форму быстрого заказа товара
    $.ajax({
      type    : "POST",
      dataType: 'json',
      cache    : false,
      url  	  : $(this).attr('action'),
      data		: formData,
      success: function(data) {
        // Если заказ был успешно создан
        if( data.status == 'ok' ) {
          window.location = data.location;
        } else if( data.status == 'error' ) {
          new Noty({
            timeout: "7000",
            layout: 'center',
            text: data.message,
            type: "error",
            animation: {
              open: null, 
              close: null
            }            
          }).show()             
        } else {
          alert('Во время оформления заказа возникла неизвестная ошибка. Пожалуйста, обратитесь в службу технической поддержки.');
        }
      }
    });
    return false;      
  }).validate();
}

// Расчёт доставки и суммы заказа
(function() {
  var CURRENT_DELIVERY;

  function init(ORDER_DELIVERY) {
    if (typeof ORDER_DELIVERY == "undefined") {
        console.error('Не передан массив доставок');
        
        return;
    }
    CURRENT_DELIVERY = ORDER_DELIVERY[0];

    changeCartSum();

    $('.delivery-select').change(function() {
      var deliveryId = $(this).val();
      
      CURRENT_DELIVERY = getCurrentDelivery(deliveryId);
      // console.log(CURRENT_DELIVERY)
      // Если есть варианты оплаты для текущей доставки
      if (CURRENT_DELIVERY.availablePaymentList.length) {
        renderPaymentSelect();
      } else {
        renderPaymentSelect(true);
      }
      // Если нет зон у текущего варианта доставки
      if (CURRENT_DELIVERY.zoneListEmpty) {
          renderDeliveryZone(true)
      } else {
          renderDeliveryZone()
      }

      changeCartSum();
    });
    $('.delivery-zone-select').change(function() {
      var deliveryId = $(this).data('delivery-id');
      var zoneId = $(this).val();
      $(this).data('delivery-zonelist-id', zoneId);
      // console.log('zoneId delivery-zone-select', $(this).data('delivery-zonelist-id'))
      
      CURRENT_DELIVERY = getCurrentDelivery(deliveryId);
      
      changeCartSum();
    })
    $('.payment-select').change(function() {
      var deliveryId = $(this).data('delivery-id');
      var paymentId = $(this).val();
      CURRENT_DELIVERY = getCurrentDelivery(deliveryId);

      if (CURRENT_DELIVERY.availablePaymentList.length) {
        changePaymentSelect(paymentId);
      }
    });

    function getCurrentDelivery(id) {
      var currentDelivery;

      $.each(ORDER_DELIVERY, function(i, item) {
        if (String(id) === item.id) {
          currentDelivery = item;
        }
      })
      return currentDelivery;
    }

    function renderDeliveryZone(clearTemplate) {
      var $deliveryZoneSelect = $('.delivery-zone-select');
      var $deliveryZoneWrap = $deliveryZoneSelect.parent();

      $deliveryZoneSelect.data('delivery-id', CURRENT_DELIVERY.id);
      $deliveryZoneSelect.styler('destroy');
      $deliveryZoneSelect.show().html('');

      if (clearTemplate) {
        $deliveryZoneSelect.addClass('_hide').hide();
        $deliveryZoneWrap.addClass('_hide-triangle')
        $deliveryZoneSelect.styler();
        
        return;
      } else {
        $deliveryZoneSelect.removeClass('_hide').show();
        $deliveryZoneWrap.removeClass('_hide-triangle')
      }

      $.each(CURRENT_DELIVERY.zoneList, function(i, item) {
        var $option = $('<option>').val(item.zoneId).text(item.name);
        $deliveryZoneSelect.append($option);
      })
      
      $deliveryZoneSelect.styler()
    }

    function renderPaymentSelect(clearTemplate) {
      var $paymentSelect = $('.payment-select');
      var $paymentDescr = $('.payment__desc');

      $paymentSelect.data('delivery-id', CURRENT_DELIVERY.id);
      $paymentSelect.styler('destroy');
      $paymentSelect.html('');

      if (clearTemplate) {
        var $option = $('<option>').val('').text('Не задан метод оплаты');
        $paymentSelect.append($option);
        $paymentSelect.prop('disabled', true)
        $paymentDescr.hide();
      } else {
        $paymentSelect.prop('disabled', false)
        $paymentDescr.show();
      }

      if (CURRENT_DELIVERY.availablePaymentList.length) {
        $.each(CURRENT_DELIVERY.availablePaymentList, function(i, item) {
          var $option = $('<option>').val(item.id).text(item.name);

          $paymentSelect.append($option);

          if (i == 0) {            
            var currentPaymentMessage = $('.payment-descr__hidden').filter('._' + CURRENT_DELIVERY.id).find('.payment-descr__hidden-item').first().html();
            $paymentDescr.html(currentPaymentMessage);
          }
        });
      }
      
      $paymentSelect.styler()
    }

    function changePaymentSelect(paymentId) {
      var $paymentDescrBlock = $('.payment__desc');
      var currentPaymentMessage = $('.payment-descr__hidden').filter('._' + CURRENT_DELIVERY.id).find('.payment-descr__hidden-item').filter('._' + paymentId).html();

      $paymentDescrBlock.html(currentPaymentMessage);
    }
  }

  function changeCartSum() {
    var currentPriceWithoutChange = Number($('.cart__sum .total-sum').data('total-sum'));
    var deliveryPrice = Number(getCurrentDeliveryPrice());
    var discountPrice = Number($('.cart__sum .cart__sum--discount .cart__sum-text-price').data('discount-value'));

    // Заполняем стоимость доставки
    $('.cart__sum .cart__sum--delivery-sum .num').text(addSpaces(deliveryPrice));
    $('.delivery__descr .delivery__price .num').text(addSpaces(deliveryPrice));
    // Описание доставки
    if (CURRENT_DELIVERY) {
      var descriptionHtml = $('.delivery__hidden-descr').filter('._' + CURRENT_DELIVERY.id).html();

      $('.delivery__descr .delivery__text').html(descriptionHtml);
    }
    // Описание оплаты
    if(CURRENT_DELIVERY){
      var $paymentDescr = $('.payment__desc');
      var currentPaymentMessage = $('.payment-descr__hidden').filter('._' + CURRENT_DELIVERY.id).find('.payment-descr__hidden-item').first().html();
      $paymentDescr.html(currentPaymentMessage);
    }

    var priceNow = (currentPriceWithoutChange + deliveryPrice) - discountPrice;
    if (priceNow < 0) {
        priceNow = 0;
    }
    // console.log('priceNow',priceNow)
    $('.cart__sum .total-sum').find('.num').text(addSpaces(Math.round(priceNow)));
  }

  function getCurrentDeliveryPrice() {
    function getPriceFromArray(array) {
      var cartSumNow = Number($('.cart__sum .total-sum').data('total-sum'))
      var deliveryPrice = null;
      var maxMorePrice = 0;
  
      $.each(array, function(i, el) {
        // Если сумма заказа сейчас >= чем задана в правиле && текущее правило больше по цене, чем предыдущее
        if (Number(cartSumNow) >= Number(el.sumMorePrice) && Number(maxMorePrice) <= Number(el.sumMorePrice)) {
          deliveryPrice = el.price
          maxMorePrice = el.sumMorePrice
        }
      })
  
      return deliveryPrice;
    }

    if (typeof CURRENT_DELIVERY == "undefined") {
      return '0';
    }
    // Если нет зон у текущего варианта доставки
    if (CURRENT_DELIVERY.zoneListEmpty) {
      // Если нет правил расчета стоимости для текущего варианта доставки
      if (CURRENT_DELIVERY.rulesListEmpty) {
        return Math.ceil(CURRENT_DELIVERY.price)
      } else {
        var priceFromArray = getPriceFromArray(CURRENT_DELIVERY.rulesList);
        var deliveryPrice = (priceFromArray !== null) ? priceFromArray : Math.ceil(CURRENT_DELIVERY.price);

        return deliveryPrice;
      }
    } else {
      var zoneId = $('.delivery-zone-select').find('option:selected').val();
      var zoneList = $.grep(CURRENT_DELIVERY.zoneList, function(item, i) {
        return item.zoneId == zoneId
      })[0];
      
      // Если у этой зоны нет правил
      if (zoneList.zoneRuleListEmpty) {
        return zoneList.price
      } else {
        // Берём подходящую стоимость из массива правил иначе стандартную цену для зоны
        var priceFromArray = getPriceFromArray(zoneList.zoneRuleList);
        var deliveryPrice = (priceFromArray !== null) ? priceFromArray : zoneList.price;

        return deliveryPrice;
      }
    }
  }

  window.DeliveryModule = {
      init: init,
      changeCartSum: changeCartSum,
      getCurrentDelivery: function() {
          return CURRENT_DELIVERY;
      }
  }
})();

// Корзина
function cartAjaxQty(){
  $(function(){
    $('.qty__input.qty--cart').off('change').change(
      $.debounce(300, function(){
        var $qtyInput = $(this);
        var id = $qtyInput.closest('.cart__table-row').data('id');
        var qtyInputVal = $qtyInput.val();
        
        if(qtyInputVal < 1) {
          $qtyInput.val(1)
        }
        var formData = $('#cart-content').serializeArray();
        formData.push({name: 'only_body', value: 1});
    
        $.ajax({
          url: '/cart',
          data: formData,
          cache: false,
          beforeSend: function(){
            preloadShow($('#cart-content .preloader'))
          },
          success: function(data){
            var $data = $(data).find('#cart-content');
            var count = 0;
            $data.find('.qty__input.qty--cart').each(function(){
              count += Number($(this).val())
            })  
            $('.cart-header .cart-header__counter .num').html(count);
            
            var newQtyInputVal = $data.find('[data-id="' + id + '"] .qty__input.qty--cart').val();
    
            $qtyInput.val(newQtyInputVal)
            
            var $tableRow = $('[data-id="' + id + '"]');
            var newItemPrice = $data.find('[data-id="' + id + '"] .cart__product-ajax-price').html();
            $tableRow.find('.cart__product-ajax-price').html(newItemPrice); 
            
            $('.cart__sum').html($data.find('.cart__sum').html());

            var cartSum = $data.find('.total-sum').data('total-sum') || "0";
            $('.cart-header .cart-header__cart-sum .num').text(addSpaces(cartSum));  
            if($('#quick_form_coupon_code').val()){
              $('#quick_form_coupon_code, .coupon-hidden-input').trigger('change')
            }
            
            DeliveryModule.changeCartSum();
            
            var newQtyInputVal = $data.find('[data-id="' + id + '"] .qty__input.qty--cart').val();
    
            if(qtyInputVal > newQtyInputVal){
              new Noty({
                  timeout: "3000",
                  layout: 'center',
                  text: 'Вы пытаетесь положить в корзину товара больше, чем есть в наличии',
                  type: "error",
                  animation: {
                    open: null, 
                    close: null
                  }   
              }).show()
            }
            preloadHide($('#cart-content .preloader'), true)
          }
        })
      })
    )
  })
}

// Очистить корзину
function cartClear() {
 $(function(){
	$('#cart-clear').click(function(e){
	  e.preventDefault();
    preloadShow($('#cart-content .preloader'));
	  
	  $.post('/cart/truncate/', function() {
	    $('.header .cart-header .cart-header__cart-sum .num').text("0");
	    $('.header .cart-header .cart-header__counter .num').text("0");
	    
      $('.quick-order, .cart-info .cart').hide();
      $('#empty-cart').show();  			    
	  });
	})   
 })  
}
// Удаление товара из корзины
function cartDeleteItem(){
  $(function(){
    $('.cart__delete').off('click').on('click', function(e){
    e.preventDefault();
    
    var $cartDeleteLink = $(this);
    var url = $cartDeleteLink.attr('href');
    
    $.ajax({
      url: url,
      cache: false,
      beforeSend: function(){
        preloadShow($('#cart-content .preloader'))
      },
      success: function(data){
        var $data = $(data).find('#cart-content');
        var count = 0;
        
        $data.find('.qty__input.qty--cart').each(function(){
          count += Number($(this).val())
        })
        // Если корзина пуста
        if(!count){
          $('.quick-order, .cart-info .cart').hide();
          $('#empty-cart').show();
        }
        $cartDeleteLink.closest('.cart__table-row').remove();
        $('.header .cart-header .cart-header__counter .num').html(count);
        
        $('.cart__sum').html($data.find('.cart__sum').html());
        
        var cartSum = $data.find('.total-sum').data('total-sum') || "0";
        $('.cart-header .cart-header__cart-sum .num').text(addSpaces(cartSum));
        if($('#quick_form_coupon_code').val()){
          $('#quick_form_coupon_code, .coupon-hidden-input').trigger('change')
        }
        
        DeliveryModule.changeCartSum();
        preloadHide($('#cart-content .preloader'),true)      
       }      
    })
  })
  })
}

// Отправка купона при оформлении заказа
function coupons() {
  var $submitBtn = $('.coupon .coupon__btn');
  var $cuponInput = $('#quick_form_coupon_code');
  var $resetBtn = $('.coupon .coupon__clear');

  $submitBtn.click(function(){
    var val = $cuponInput.val();
    if(!val){
      return;
    }
    
    ajaxCouponCheck();
  });
  
  function ajaxCouponCheck(isResetBtn){
    var url = '/order/stage/confirm';
    var val = $cuponInput.val();

    var orderSumDefault = Number($('.cart__sum .total-sum').data('total-sum'));
    
    // Получаем данные формы, которые будем отправлять на сервер
    var formData = $('#order-stage-form').serializeArray();
    formData.push({name: 'ajax_q', value: 1});
    formData.push({name: 'only_body', value: 1});
    formData.push({name: 'form[coupon_code]', value: val});
    
    $.ajax({
      type: "POST",
      cache: false,
      url: url,
      data: formData,
      beforeSend: function(){
        $submitBtn.find('.coupon__btn-icon').remove();
        $submitBtn.addClass('_loading').append('<span class="coupon__btn-icon"><i class="fal fa-circle-notch fa-spin"></i></span>')  
      },
      success: function(data) {
        var $discountBlock = $(data).closest('#order-stage-form').find('tr.discount');
        var discountName = $discountBlock.find('td.name').text();
        var discountPercent = $discountBlock.find('td.percent').html();
        var discountType = $discountBlock.data('discount-type')
        // console.log('discountType', discountType)
        
        function getDiscountType(type){
          switch (type) {
            case 'sum':
              return 'по сумме заказа';
              break;
            case 'cumulative':
              return 'накопительная';
              break;
            case 'coupon':
              return 'по купону';
              break;
            default:
              return '';
          }
        }
        if(!discountPercent){
          discountPercent = '0'
        }
        // Записываем название и размер скидки по купону
        // $('.cart__sum-row.cart__sum--discount .cart__sum-label').html(discountName);
        $('.cart__sum-row.cart__sum--discount .cart__sum-text-price').html(discountPercent);
        $('.cart__sum-row.cart__sum--discount .discount-type').html(getDiscountType(discountType));
        
        // Получаем новую итоговую стоимость заказа
        var $totalBlock = $(data).closest('#order-stage-form').find('tr.total');

        var discount = $totalBlock.find('td.total-sum').data('discount');
        
        // Считаем размер скидки
        var discountRub = String(Math.floor(orderSumDefault) - Math.floor(discount));
        
        $('.cart__sum-row.cart__sum--discount .cart__sum-text-price').data('discount-value', discountRub);
        
        if(discountRub > 0){
          $('.cart__sum-row.cart__sum--discount').show();
          if(discountType === 'coupon'){
            $submitBtn.addClass('_added').find('.coupon__btn-icon').html('<i class="fal fa-check-circle"></i>');
          } else {
            // Это не клик по кнопке reset
            if(!isResetBtn){
              $submitBtn.addClass('_not-add').find('.coupon__btn-icon').html('<i class="fal fa-times-circle"></i>');
            }
            notAddBtn();
          }
          $cuponInput.parent().addClass('_active')
        } else {
          $('.cart__sum-row.cart__sum--discount').hide();
          // Это не клик по кнопке reset
          if(!isResetBtn){
            $submitBtn.addClass('_not-add').find('.coupon__btn-icon').html('<i class="fal fa-times-circle"></i>');
          }          
          notAddBtn();
        }
        function notAddBtn(){
          setTimeout(function(){
            $submitBtn.removeClass('_loading');
            $submitBtn.find('.coupon__btn-icon').remove();
            $cuponInput.parent().removeClass('_active')
          }, 1000)
        }
        // Пересчитываем итоговую сумму заказа
        DeliveryModule.changeCartSum();
      },
      error: function(data){
        console.log("Возникла ошибка: Невозможно отправить форму купона.");
      }
    });
  }
  
  $cuponInput.on('change', function(){
      var $input = $(this);
      $('.coupon-hidden-input').val($input.val())
      
      if($input.val()) {
        $input.next('.coupon__clear').addClass('_active')
      } else {
        $input.next('.coupon__clear').removeClass('_active')
      }
      
      ajaxCouponCheck()
    }
  )
  $resetBtn.on('click', function(){
    $(this).toggleClass('_active')
    $cuponInput.parent().removeClass('_active');
    $cuponInput.val('')
    $('.coupon-hidden-input').val('')
    ajaxCouponCheck(true)
  })
}
  
// Клик по кнопке корзины в шапке
function loadAjaxCart(){
  // Данные которые отправятся на сервер чтобы получить только форму быстрого заказа без нижней части и верхней части сайта
  var quickFormData = [
      {name: 'ajax_q', value: 1},
      {name: 'fast_order', value: 1}
  ];
  $.ajax({
    type: "POST",
    cache: false,
    url: '/cart/add',
    data: quickFormData,
    beforeSend: function() {
      startLoadCart();
    },
    success: function(data) {
      $.fancybox.close();
      $.fancybox.open(data,{
        baseClass: 'quickOrder',
        // modal: true,
        afterShow: function(){
    			cartAjaxQty()
    			quantity()
    			coupons();
          endLoadCart();
        }
      })
    },
    error: function(){
      endLoadCart();
      $.fancybox.open('<div style="padding:30px 15px"><h3>К сожалению произошла ошибка, корзина не загружена</h3></div>')
    }
  })
  function startLoadCart(){
        $('.cart-header .fal').removeClass('fa-shopping-cart').addClass('fa-spin fa-circle-notch')
        $('.cart-header').addClass('_disabled')    
  }
  function endLoadCart(){
	  $('.cart-header .fal').removeClass('fa-spin fa-circle-notch').addClass('fa-shopping-cart')
		$('.cart-header').removeClass('_disabled')
  }    
}
$(function(){
  $('.header .cart-header .cart-header__link').click(function(e){
   e.preventDefault();
   loadAjaxCart(); 
  })
})

// Функция Быстрого просмотра товара
function quickView() {
  // Получение центральной разметки страницы (для быстрого просмотра)
  $(function(){
    $.fn.getColumnContent = function() {
      var $block = ($(this).length && $(this).hasClass('product-wrap') ? $(this).filter('.product-wrap') : $('div.product-wrap:eq(0)'));
      $block.find('.fancybox-close-small').show();
      return $block;
    }
  });
}
// Действие при нажатии на кнопку быстрого просмотра.  
$(function(){
  $(document).on('click', 'a.quickview', function() {
    var href = $(this).attr('href');
    href += (false !== href.indexOf('?') ? '&' : '?') + 'only_body=1';
    
    if($(this).hasClass('product__image-link') && getClientWidth() <= 768){
      return false;
    }
    quickViewShow(href);
    return false;
  });
});
// Быстрый просмотр товара
function quickViewShow(href, atempt, addEntry) {
  // Если данные по быстрому просмотру уже подгружены
  $.get(href, function(content) {
    $.fancybox.close();
    fancyboxShow($(content).getColumnContent(), href)
  });
  function fancyboxShow(content, href){
      $.fancybox.open(content, {
        baseClass: 'quickView',
        beforeShow: function(){
          goodsImage();
          goodsSelect();
        },
        afterClose: function(){
          // Добавляем запись в историю, используя pushState
          if (!!(window.history && history.pushState)){
            if(href){
              href = href.replace('&only_body=1', '')
              // Пытаемся изменить адрес страницы на тот, по которому кликнули
              try { window.history.replaceState(null,null,'/'); } catch(e) {return true;}
            }
          }          
        }, 
        afterShow: function() {
          goodsImage();
          goodsMods();
          addCart();
          quantity();
          initTabs();
          goodsPage();
          lozad().observe();
          $('.products-grid._related_goods, .products-grid._related_views').find(".mouseHoverImgCarousel").HoverMouseCarousel();
          
          // Добавляем запись в историю, используя pushState
          if (!!(window.history && history.pushState)){
            if(href){
              href = href.replace('&only_body=1', '')
              // Пытаемся изменить адрес страницы на тот, по которому кликнули
              try { history.pushState(null, null, href); } catch(e) {return true;}
            }
          }
        }        
      })    
  }
}
// Событие происходящее при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function(e) {
    // текущий URL
    var pahtname = location.pathname;
    // console.log(pahtname)
    
    if(pahtname === '/'){
      $.fancybox.close()
    }
});   
// Функция Быстрого просмотра товара c модификацией
function quickViewMod() {
  // Действие при нажатии на кнопку в корзину товара c модификацией
  $(document).ready(function() {
    $(document).on('click', 'a.quickviewmod', function() {
      var href = $(this).attr('href');
      href += (false !== href.indexOf('?') ? '&' : '?') + 'only_body=1';
      quickViewShowMod(href);
      return false;
    });
  });
}
// Быстрый просмотр товара с модификацией
function quickViewShowMod(href, atempt) {
  $.get(href, function(content) {
    $.fancybox.close();
    fancyboxShow($(content).getColumnContent())
  });
  function fancyboxShow(content){
      $.fancybox.open(content, {
        baseClass: 'quickViewMod',
        beforeShow: function(){
          goodsSelect();
        },
        afterClose: function(){
          // Добавляем запись в историю, используя pushState
          if (!!(window.history && history.pushState)){
            if(href){
              href = href.replace('&only_body=1', '')
              // Пытаемся изменить адрес страницы на тот, по которому кликнули
              try { window.history.replaceState(null,null,'/'); } catch(e) {return true;}
            }
          }          
        },        
        afterShow: function() {
          goodsMods();
          addCart();
          quantity();
          goodsPage();
          // Добавляем запись в историю, используя pushState
          if (!!(window.history && history.pushState)){
            if(href){
              href = href.replace('&only_body=1', '')
              // Пытаемся изменить адрес страницы на тот, по которому кликнули
              try { history.pushState(null, null, href); } catch(e) {return true;}
            }
          }          
        }        
      })    
  }  
}

// Функция + - для товаров
function quantity() {
  $('.qty__btn.qty__btn--plus').off('click').click(function(){
    var 
      quantity = $(this).parent().find('.qty__input'),
      currentVal = parseInt(quantity.val());
    if (!isNaN(currentVal)){
      quantity.val(currentVal + 1);
      quantity.trigger('change');
    }
    return false;
  });
  $('.qty__btn.qty__btn--minus').off('click').click(function(){
    var 
      quantity = $(this).parent().find('.qty__input'),
      currentVal = parseInt(quantity.val());
    if (!isNaN(currentVal) && !(currentVal <= 1) ){
      quantity.val(currentVal - 1);
      quantity.trigger('change');
    }
    return false;
  });
  // Если вводят 0 то заменяем на 1
  $('.qty .qty__input').off('change').change(function(){
    if($(this).val() < 1){
      $(this).val(1); 
    }
  });
}

// Cчётчик скидки(в карточке товара) старой и новой цены
function calcDiscount(){
  function getDiscountObj (priceNow, priceOld){
    if(priceOld) {
      return {
        price: Math.ceil(priceOld - priceNow),
        percent: Math.ceil(100 - ((priceNow * 100) / priceOld))
      }
    }
  }
  var $discountBlock = $('.discount-block');
  var priceNow = $discountBlock.data('now-price');
  var priceOld = $discountBlock.data('old-price');
  var discountObj = getDiscountObj(priceNow, priceOld);
  
  if(discountObj && discountObj.price > 0){
    $discountBlock.find('.discount-block__percent-num').text(discountObj.percent);
    $discountBlock.find('.discount-block__price-num').text(discountObj.price);
    $discountBlock.fadeIn();
  } else {
    $discountBlock.fadeOut();
    $discountBlock.find('.discount-block__percent-num').text(0);
    $discountBlock.find('.discount-block__price-num').text(0);    
  }
}
/* Скрипты для карточки товара */
function goodsSelect(){
  // Кастом селекты
  $(function(){
    $('.product-modifications select').styler();
  })
}
function goodsPage() {
  // Считаем блок скидки
  calcDiscount();
  // Скролл по ссылкам
  $('.scroll-link').on('click', function(evt){
    evt.preventDefault();
    var href = $(this).attr('href');
    var tabNumber = href.slice(-1);
  
    tabSwitch(tabNumber);
    
    if(tabNumber === '4'){
      var top = $('#tabs-list').offset().top - $(window).scrollTop();
      $('.fancybox-slide').animate({scrollTop : top}, 700);
      
      return;
    }
    $('html,body').animate({scrollTop : jQuery(href).offset().top}, 700);
  })  
  // Валидация отзывов
  $('.goods-opinion-form').validate();

  // Добавление отзыва о товаре. Рейтинг
  if(typeof($('.goods-opinion-form__rating').rating) == "function" ) {
    $('.goods-opinion-form__rating input').rating({
      split: 2,
      required: true
    });
  }

  // Иконка для обновления изображение капчи
  $('.goods-opinion-form__captcha-refresh-button').click(function(){
    RefreshImageAction(this,1,1);
    $('.goods-opinion-form__captcha-img').attr('src',$('.goods-opinion-form__captcha-img').attr('src') + '&rand' + Math.random(0,10000));
    return false;
  });
  // Счётчик рейтинга для отзывов
  function calcReviewCount(){
      var reviewCount = $('.goods-opinion-list .opinion-item').length;
      if(reviewCount) {
        for(var i = 1;i < 6;i++) {
          var currentRatingStage = $('.opinion-item[data-rating='+ i +']').length;
          $('.grade-block[data-number='+ i +'] .grade-count-number').text(currentRatingStage);
          var percent = parseInt(100 / (reviewCount / currentRatingStage));
          $('.grade-block[data-number='+ i +'] .grade-line-count').css('width', percent + '%');
        }
      }
  }
  $(function(){
    calcReviewCount()
  })  
  // AJAX отправка отзыва
  $('.goods-opinion-form__submit-button').click(function(){
    var $btn = $(this);
    // Находим форму, которую отправляем на сервер, для добавления товара в корзину
    var $form =  $('.goods-opinion-form');
    // return;
    if($form.valid()){
      // Получаем данные формы, которые будем отправлять на сервер
      var formData = $form.serializeArray();
      // Сообщаем серверу, что мы пришли через ajax запрос
      formData.push({name: 'ajax_q', value: 1});
      // Аяксом добавляем товар в корзину и вызываем форму быстрого заказа товара
      $.ajax({
        type: "POST",
        cache: false,
        url: $form.attr('action'),
        data: formData,
        beforeSend: function(){
          $btn.addClass('_loading').append('<i class="fal fa-circle-notch fa-spin"></i>')          
        },
        success: function(data) {
          var REVIEWS_INDEX = 5;
          var $noticeBlock = $(data).find('#goods-opinion-notice');
          
          if($noticeBlock.data('opinion-type') === 'success') {
            $('.review-counter').addClass('_visible').show()
            $('.goods-opinion-list').show()
            $('.product-view__rating').html($(data).find('.product-view__rating').html())
            $('.goods-opinion-counter').html($(data).find('.goods-opinion-counter').html())
            $('.review-grade').html($(data).find('.review-grade').html())
            $('.goods-opinion-list').html($(data).find('.goods-opinion-list').html())
            var opinionsCount = $('.goods-opinion-list').find('.opinion-item').length;
            if(opinionsCount > REVIEWS_INDEX){
              $('#goods-opinion__more-button').show();
            }
            calcReviewCount();
            $form.trigger('reset')
          } else {
            $('.goods-opinion-form__captcha-refresh-button').trigger('click');
          }
          new Noty({
            text: '<div class="noty_content">' + $noticeBlock.text() +'</div>',
            type: $noticeBlock.data('opinion-type')
          }).show()
          
          $btn.removeClass('_loading').find('.fal').remove();
        }
      });
    
      return false
    }
  })
  // Показать больше отзывов
  $('#goods-opinion__more-button').click(function(){
    var REVIEWS_INDEX = 5;
    var opinionsCount = $('.opinion-item').length;
    $('.opinion-item').not(':visible').slice(0, REVIEWS_INDEX).show();
    var opinionVisibleCountNow = $('.opinion-item').not(':visible').length;
    
    if(!opinionVisibleCountNow) {
      $(this).hide()
    }
    return false;
  })
  // 
  $('.goods-delivery .goods-delivery__more-btn').click(function(){
    var $btn = $(this);
    
    $btn.parent().find('.goods-delivery__content').toggle();
    
    if($btn.hasClass('_active')){
      $btn.text('Подробнее').removeClass('_active');
      return;
    }
    
    $btn.addClass('_active').text('Скрыть')
  })
}
// Скрипты модификации товара
function goodsMods(){
  // Функция собирает свойства в строку, для определения модификации товара
  function getSlugFromGoodsDataFormModificationsProperties(obj) {
    var properties = new Array();
    $(obj).each(function(i){
      properties[i] = parseInt($(this).val());
    });
    return properties.sort(function(a,b){return a - b}).join('_');
  }
   
  var 
    // Запоминаем поля выбора свойств, для ускорения работы со значениями свойств
    goodsDataProperties = $('form.product-view__form select[name="form[properties][]"]'),
    // Запоминаем блоки с информацией по модификациям, для ускорения работы
    goodsDataModifications = $('div.product-modifications__list');
    
  // Обновляет возможность выбора свойств модификации, для отключения возможности выбора по характеристикам модификации которой не существует.
  function updateVisibility (y) {
    // Проверяем в каждом соседнем поле выбора модификаций, возможно ли подобрать модификацию для указанных свойств
    goodsDataProperties.each(function(j){
      // Если мы сравниваем значения свойства не с самим собой, а с другим списком значений свойств
      if( j != y ) {
        // Проходим по всем значениям текущего свойства модификации товара
        $(this).find('option').each(function(){
          // Записываем временный массив свойств, которые будем использовать для проверки существования модификации
          var checkProperties = new Array();
          $(goodsDataProperties).each(function(i){
            checkProperties[i] = parseInt($(this).val());
          });
          // Пытаемся найти модификацию соответствующую выбранным значениям свойств
          checkProperties[j] = parseInt($(this).attr('value'));
          // Собираем хэш определяющий модификацию по свойствам
          slug = checkProperties.sort(function(a,b){return a - b}).join('_');
          // Ищем модификацию по всем выбранным значениям свойств товара. Если модификации нет в возможном выборе, отмечаем потенциальное значение выбора как не доступное для выбора, т.к. такой модификации нет.
          if(!goodsDataModifications.filter('[rel="'+slug+'"]').length) {
           $(this).attr('disabled', true);
          // Если выбрав данное значение свойства товара можно подобрать модификацию, то выделяем вариант выбора как доступный.
          } else {
            $(this).attr('disabled', false);
          }
        });
      }
    });
  }
  // Обновляем возможность выбора модификации товара по свойствам. Для тех свойств, выбор по которым не возможен, отключаем такую возможность.
  // Проверяем возможность выбора на всех полях кроме первого, чтобы отключить во всех остальных варианты, которые не возможно выбрать
  updateVisibility (0);
  // Проверяем возможность выбора на всех полях кроме второго, чтобы в первом поле так же отключилась возможность выбора не существующих модификаций
  updateVisibility (1);

  // Изменение цены товара при изменении у товара свойства для модификации
  goodsDataProperties.each(function(){
    $(this).change(function(){
      var slug = getSlugFromGoodsDataFormModificationsProperties(goodsDataProperties),
        modificationBlock             = $('.product-modifications__list[rel="'+slug+'"]'),
        modificationId                = parseInt(modificationBlock.find('[name="id"]').val()),
        modificationGoodsModImageId   = modificationBlock.find('[name="goods_mod_image_id"]').val(),
        modificationArtNumber         = modificationBlock.find('[name="art_number"]').val(),
        modificationPriceNow          = parseInt(modificationBlock.find('[name="price_now"]').val()),
        modificationPriceNowFormated  = modificationBlock.find('.price_now_formated').html(),
        modificationPriceOld          = parseInt(modificationBlock.find('[name="price_old"]').val()),
        modificationPriceOldFormated  = modificationBlock.find('.price_old_formated').html(),
        modificationRestValue         = parseFloat(modificationBlock.find('[name="rest_value"]').val()),
        modificationDescription       = modificationBlock.find('.description').html(),
        modificationMeasureId         = parseInt(modificationBlock.find('[name="measure_id"]').val()),
        modificationMeasureName       = modificationBlock.find('[name="measure_name"]').val(),
        modificationMeasureDesc       = modificationBlock.find('[name="measure_desc"]').val(),
        modificationMeasurePrecision  = modificationBlock.find('[name="measure_precision"]').val(),
        modificationIsHasInCompareList= modificationBlock.find('[name="is_has_in_compare_list"]').val(),
        goodsModificationId           = $('.goodsDataMainModificationId'),
        goodsPriceNow                 = $('.goodsDataMainModificationPriceNow'),
        goodsPriceOld                 = $('.goodsDataMainModificationPriceOld'),
        goodsAvailable                = $('.product-view__available'),
        goodsAvailableTrue            = goodsAvailable.find('.product-view__available-item').filter('._available'),
        goodsAvailableFalse           = goodsAvailable.find('.product-view__available-item').filter('._not-available'),
        goodsAvailableAddCart         = $('.product-view__actions._add-to-form .product-view__add-cart'),
        goodsArtNumberBlock           = $('.product-view__art-number'),
        goodsArtNumber                = goodsArtNumberBlock.find('span'),
        goodsCompareAddButton         = $('.goodsDataCompareButton.add'),
        goodsCompareDeleteButton      = $('.goodsDataCompareButton.delete'),
        goodsModDescriptionBlock      = $('.product-modifications__description'),
        goodsModEmpty      = $('.product-view__mod-empty');
       
       
       // Меняет главное изображение товара на изображение с идентификатором goods_mod_image_id
        function changePrimaryGoodsImage(goods_mod_image_id) {
          // Если не указан идентификатор модификации товара, значит ничего менять не нужно.
          if(1 > goods_mod_image_id) {
            return true;
          }
          var 
            // Блок с изображением выбранной модификации товара
            goodsModImageBlock = $('div.owl-carousel a[data-image-id="' + parseInt(goods_mod_image_id) + '"]'),
            // Блок, в котором находится главное изображение товара
            MainImageBlock = $('#main-image'),
            // Изображение модификации товара, на которое нужно будет изменить главное изображение товара.
            MediumImageUrl = goodsModImageBlock.attr('href'),
            // Главное изображение, в которое будем вставлять новое изображение
            MainImage = MainImageBlock.find('img')
          ;
          // Если не удалось найти блок, в котором находится главное изображение товара
          if(!MainImageBlock.length) {
            console.log("GoodsModImage error: MainImageBlock not found");
            return false;
          }
          // Если не удалось найти главное изображение товара
          if(!MainImage.length) {
            console.log("GoodsModImage error: MainImage not found");
            return false;
          }
          // Если не удалось найти главное изображение товара
          if(!goodsModImageBlock.length) {
            console.log("GoodsModImage error: goodsModImageBlock not found");
            return false;
          }
          // Если не удалось найти URL изображения для модификации товара
          if(typeof MediumImageUrl === 'undefined') {
            console.log("GoodsModImage error: MediumImageUrl not found");
            return false;
          }
          // Если изображение модификации товара найдено - изменяем главное изображение
          MainImageBlock.attr('data-image-id', parseInt(goods_mod_image_id));
          MainImageBlock.attr('href', MediumImageUrl);
          MainImage.attr('src', MediumImageUrl);
      
          return true;
        }  
  
      // Изменяем данные товара для выбранных параметров. Если нашлась выбранная модификация
      if(modificationBlock.length) {
        // Обновляем изображение модификации товара, если оно указано
        changePrimaryGoodsImage(modificationGoodsModImageId);  
        // Цена товара
        goodsPriceNow.html(modificationPriceNowFormated);
        $('.discount-block').data('now-price', modificationPriceNow);
        // Старая цена товара
        if(modificationPriceOld > modificationPriceNow) {
          goodsPriceOld.show().html(modificationPriceOldFormated);
          $('.discount-block').data('old-price', modificationPriceOld);
        } else {
          goodsPriceOld.hide().html('');
          $('.discount-block').data('old-price', 0);
        }
        // Считаем скидку в блоке
        calcDiscount();
        // Есть ли товар есть в наличии
        if(modificationRestValue>0) {
          goodsAvailableTrue.show();
          goodsAvailableFalse.hide();
          goodsAvailableAddCart.show();
          goodsModEmpty.hide();
        // Если товара нет в наличии
        } else {
          goodsAvailableTrue.hide();
          goodsAvailableFalse.show();
          goodsAvailableAddCart.hide();
          goodsModEmpty.show();
        }
        // Если товар есть в списке сравнения
        if(modificationIsHasInCompareList>0) {
          goodsCompareAddButton.hide();
          goodsCompareDeleteButton.show();
        // Если товара нет в списке сравнения
        } else {
          goodsCompareAddButton.show();
          goodsCompareDeleteButton.hide();
        }
        // Покажем артикул модификации товара, если он указан
        if(modificationArtNumber.length>0) {
          goodsArtNumberBlock.show();
          goodsArtNumber.html(modificationArtNumber);
        // Скроем артикул модификации товара, если он не указан
        } else {
          goodsArtNumberBlock.hide();
          goodsArtNumber.html('');
        }
        // Описание модификации товара. Покажем если оно есть, спрячем если его у модификации нет
        if(modificationDescription.length > 0) {
          goodsModDescriptionBlock.show().html('<div>' + modificationDescription + '</div>');
        } else {
          goodsModDescriptionBlock.hide().html();
        }
        // Идентификатор товарной модификации
        goodsModificationId.val(modificationId);
      } else {
        // Отправим запись об ошибке на сервер
        sendError('no modification by slug '+slug);
        alert('К сожалению сейчас не получается подобрать модификацию соответствующую выбранным параметрам.');
      }
    });
  });  
}
// Скрипты для изображения товара
function goodsImage() {
  // Изображения товара
  $(function(){
    var $imageList = $("#product-view-image-list");

     $imageList.owlCarousel({
        items: 3,
        loop: false,
        dots: true,
        margin: 5,
        nav: false,
        responsive: {
          0:{items:1},
          320:{items:2},
          480:{items:2},
          540:{items:2},
          768:{items:3},
          992:{items:3},
          1200:{items:3}
        },        
    })

    // Увеличение изображения при нажатии изображение
    $('#main-image').click(function(){
      $imageList.find('a[data-image-id="'+ parseInt($('#main-image').attr('data-image-id')) +'"]').click();
      return (false)
    })
  });
}
// Инициализация табов на странице товара
function initTabs() {
  // Вкладки товара карусель
  $('#tabs-list').owlCarousel({
    autoWidth: true,
    items: 6,
    margin: 10,
    loop: false,   
    dots: false,
    nav: true,    
    navText: ["<i class='pdt-nav fal fa-angle-left' aria-hidden='true'></i>", "<i class='pdt-nav fal fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
      0:{items:1},
      576:{items:2},
      992:{items:3},
      1199:{items:4}
    }    
  }) 
  // Блок в котором находятся табы
  var tabBlock = $('.product-tabs');
  if(!tabBlock.length) {
    return false;
  }
  // По умолчанию делаем отметку о том что активного таба не найдено
  var isFind = 0;
  tabBlock.find('.tabs-list__item-link').each(function(i){
    // Если нашёлся активный там
    if($(this).hasClass('_active')) {
      // Инициализируем найденный таб
      $(this).click();
      // Ставим отметку, о том что не нужно инициализировать первый таб на странице
      isFind = 1;
    }
  });
  // Если не найдено ни одного таба с отметкой о том что он активен
  if(!isFind) {
    // Ставим активным первый таб на странице.
    var tab = $('.tabs-list .tabs-list__item .tabs-list__item-link').attr('id').slice(-1);
    tabSwitch(tab, true);
  }
}

// Выбор вкладки на странице товара
function tabSwitch(nb) {
  var tabBlock = $('.product-tabs');
  tabBlock.find('.tabs-list__item-link').removeClass('_active');
  tabBlock.find('.tabs-content__item').hide();
  $('#tab_' + nb).addClass('_active');
  $('#content_' + nb).show();
}
/* END карточка товара */


// Удаление товара из Сравнения без обновлении страницы
function removeFromCompare(e){
  if(confirm('Вы точно хотите удалить товар из сравнения?')){
    var del = e;
    var num = $('.compare .count').text();
    e.parent().fadeOut().remove();
    url = del.data('href');
    goodsModId = $(del).attr('data-goods-mod-id');
    $.ajax({ 
      cache : false,
      url		: url,
      success: function(d){
        var oldCount = num;
        var newCount = oldCount - 1;
        $('.compare .count').text(newCount);
        var flag = 0;
        
        if(newCount != 0){
          $('#compare-items li.item').each(function(){
            if(flag == 0){
              if($(this).css('display') == 'none'){
                $(this).show();
              flag++;
              }
            }
          })}else{
            $('.compare').removeClass('have-items');
            $('.compare #compare-items .empty').show();
            $('.compare .actions').hide();
          }
        var obj = $('.add-compare[data-mod-id="' + goodsModId + '"]');
        if(obj.length) {
          obj.attr("data-action-is-add", "1")
          .removeAttr("title")
          .removeClass("added")
          .attr("href", obj.attr("href").replace(obj.attr('data-action-delete-url'), obj.attr('data-action-add-url')));
        }
  		}
    })
  }
}

// Удаление ВСЕХ товаров из Сравнения без обновлении страницы
function removeFromCompareAll(e){
  if(confirm('Вы точно хотите очистить корзину?')){
    var del = e;
    url = del.data('href');
  
    $.ajax({ 
      cache   : false,
      url		  : url,
      success: function(d){
        // Очищаем активные кнопки сравнения на товарах
        $('.compare #compare-items .item .item-remove').each(function(){
          var goodsModId = $(this).attr('data-goods-mod-id');
          var obj = $('.add-compare[data-mod-id="' + goodsModId + '"]');
           
          if(obj.length) {
            obj.attr("data-action-is-add", "1")
            .removeAttr("title")
            .removeClass("added")
            .attr("href", obj.attr("href").replace(obj.attr('data-action-delete-url'), obj.attr('data-action-add-url')));
          }         
        })
        
        $('.compare').removeClass('have-items');
        $('.compare .count').text("0");
        $('.compare .actions').hide();
        $('.compare #compare-items .item').remove();
        $('.compare #compare-items .empty').show();
        $('.add-compare').removeAttr("title").removeClass("added");
  		}
    })
  }
}

// Удаление товара из Избранного без обновлении страницы
function removeFromFavorites(e){
  if(confirm('Вы точно хотите удалить товар из избранного?')){
    var del = e;
    var num = $('.favorites .count').text();
    e.parent().fadeOut().remove();
    url = del.data('href');
    goodsModId = $(del).attr('data-goods-mod-id');
    $.ajax({ 
      cache    : false,
      url		  : url,
      success: function(d){
        var oldCount = $('.favorites .count').text();
        var newCount = oldCount - 1;
        $('.favorites .count').text(newCount);
        var flag = 0;
        
        if(newCount != 0){
          $('#favorites-items li.item').each(function(){
            if(flag == 0){
              if($(this).css('display') == 'none'){
                $(this).show();
              flag++;
              }
            }
          })}else{
            $('.favorites').removeClass('have-items');
            $('.favorites #favorites-items .empty').show();
            $('.favorites .actions').hide();          
          }
        var obj = $('.add-wishlist[data-mod-id="' + goodsModId + '"]');
        if(obj.length) {
          obj.attr("data-action-is-add", "1")
          .removeAttr("title")
          .removeClass("added")
          .attr("href", obj.attr("href").replace(obj.attr('data-action-delete-url'), obj.attr('data-action-add-url')));
        }
  		}
    })
  }
}

// Удаление ВСЕХ товаров из Избранное без обновлении страницы
function removeFromFavoritesAll(e){
  if(confirm('Вы точно хотите очистить избранное?')){
    var del = e;
    url = del.data('href');
    
    $.ajax({ 
      cache   : false,
      url		  : url,
      success: function(d){
        // Очищаем активные кнопки избранное на товарах
        $('.favorites #favorites-items .item .item-remove').each(function(){
          var goodsModId = $(this).attr('data-goods-mod-id');
          var obj = $('.add-wishlist[data-mod-id="' + goodsModId + '"]');
          
          if(obj.length) {
            obj.attr("data-action-is-add", "1")
            .removeAttr("title")
            .removeClass("added")
            .attr("href", obj.attr("href").replace(obj.attr('data-action-delete-url'), obj.attr('data-action-add-url')));
          }        
        })    
        
        $('.favorites').removeClass('have-items');
        $('.favorites .count').text("0");
        $('.favorites .actions').hide();
        $('.favorites #favorites-items .item').remove();
        $('.favorites #favorites-items .empty').show();
        $('.add-wishlist').removeAttr("title").removeClass("added");
  		}
    })
  }
}

// Удаление товара из корзины без обновлении страницы
function removeFromCart(e){
  if(confirm('Вы точно хотите удалить товар из корзины?')){
    var del = e;  
    e.parent().fadeOut().remove();
    url = del.data('href');
    quantity = del.data('count');
    
    $('.total-sum').animate({opacity: 0},500);
    $.ajax({
      cache   : false,
  		url		  : url,
      success: function(d){
        var oldCount = $('.cart .count').text();
        var oldQuantity = quantity;
        var newCount = oldCount - oldQuantity;
        
        $('.cart .count').text(newCount);
        $('.total-sum').animate({opacity: 1},500);
        $('.total-sum').html($(d).find('.total-sum').html());
          var flag = 0; 
          if(newCount != 0){
          $('.cart-products-list li.item').each(function(){
            if(flag == 0){
              if($(this).css('display') == 'none'){
                $(this).show();
              flag++;
              }
            }
          })}else{
            $('.header .cart .cart-content .cart-products-list').hide();
            $('.header .cart  .cart-content .subtotal').hide();
            $('.header .cart  .cart-content .actions').hide();
            $('.header .cart  .cart-content .empty').show();
          }
        }
      })
  }
}

// Удаление ВСЕХ товаров из Корзины без обновлении страницы
function removeFromCartAll(e){
  event.preventDefault();
  if(confirm('Вы точно хотите очистить корзину?')){
    var del = e;  
    e.parent().fadeOut().remove();
    url = del.data('href');
    $.ajax({ 
      cache   : false,
      url		  : url,
      success: function(d){
        $('.cart .count').text("0");
        $('.cart .header-cartSum').text("0");
        $('.header .cart  .cart-content .cart-products-list').hide();
        $('.header .cart  .cart-content .subtotal').hide();
        $('.header .cart  .cart-content .actions').hide();
        $('.header .cart  .cart-content .empty').show();
  		}
    })
  }
}

// Функции для главной страницы
function indexPage() {
  // Активные пункты меню при прокрутке
  var $sections = $('.section');

  $(window).on('scroll',function () {
    if(getClientWidth() >= 992){
      var $nav = $('.header__menu');
      var navHeight = $nav.outerHeight();    
      var currentPosition = $(this).scrollTop();
      
      $sections.each(function(i, el) {
        var top = $(el).offset().top - navHeight,
            bottom = top + $(el).outerHeight();
        
        if (currentPosition >= top && currentPosition <= bottom) {
          $nav.find('.header-nav__link').parent().siblings().removeClass('_active')
          $nav.find('.header-nav__link[href="#'+$(el).attr('id')+'"]').parent().addClass('_active');
        }
      });
    }
  })

  // Слайдер на главной
  var $slideshow = $('#slideshow .slideshow__container');
  var itemsCount = $slideshow.find('.slideshow__item').length;
  // Lozad изобаржения для десктопа
  var initSlideshowLozad = function(){
    if(getClientWidth() > 576){
      lozad('.slideshow-lozad').observe();
    }
  }  
  
  $slideshow.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,    
    loop: false,
    lazyLoad: true,
    dots: false,
    animateOut: 'fadeOut',
    onInitialize: function(){
      initSlideshowLozad();
    },
    onResize:function(){
      initSlideshowLozad();
    },
    onChanged: function(event) {
      if (itemsCount > 1) {
        var index = event.item.index;

        $('.slideshow-dots .slideshow-dots__item').removeClass('_active').eq(index).addClass('_active')
      }
    },
    onInitialized: function() {
      if (itemsCount > 1) {
        var i = 0;
        
        while(i < itemsCount){
          var $li = $('<li>').addClass('slideshow-dots__item');
          
          $li.click(function () {
            $(this).addClass('_active').siblings().removeClass('_active');
            $slideshow.trigger('to.owl.carousel', [$(this).index(), 300]);
          })
          if (i === 0) {
            $li.addClass('_active')
          }
          $('.slideshow-dots .slideshow-dots__list').append($li);
          i++;
        }
      }
    }
  });
  // Слайдер новостей (все новости без группировки)
  $(".news .news__list").owlCarousel({
    margin: 15,
    items: 4,
    loop: false,
    rewind: true,
    lazyLoad: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoHeight: false,
    smartSpeed: 500,
    responsive:{
      0:{items:1},
      576:{items:2},
      992:{items:3},
      1199:{items:4}
    }
  });
  $(".news .news__item a").fancybox({
     defaultType: "ajax",
     baseClass: "fancy-news"
  })
  // Вкладки карусель
  $('.pdt-nav__list').owlCarousel({
    autoWidth: true,
    items: 7,
    margin: 10,
    loop: false,   
    dots: false,
    nav: true,    
    navText: ["<i class='pdt-nav fal fa-angle-left' aria-hidden='true'></i>", "<i class='pdt-nav fal fa-angle-right' aria-hidden='true'></i>"],      
  })
  // Вкладки категорий (переключение)
  var $element = $('#producttabs');
	var $itemNav = $('.pdt-nav__item', $element);
	var $itemContent = $('.products-container', $element);
	$itemNav.click(function(){
		var $this = $(this);
		if($this.hasClass('_active')) return false;
		$itemNav.removeClass('_active');
		$this.addClass('_active');
		var itemActive = '.' + $this.attr('data-href');

		$itemContent.removeClass('_active').hide();
		$(itemActive, $element).fadeIn();
		
		if(getClientWidth() < 991) {
		  if($('.pdt-nav__list').hasClass('_active')){
		    $('.pdt-nav__list').toggleClass('_active').fadeToggle('fast')
		  }
		}
		return false;
	});
  var GOODS_INDEX = 10;
  // Показать все
  $element.on('click', '.button._products-show-all' ,function(){
      var isLoaded = $(this).hasClass('loaded');
      
      if(isLoaded){
        $(this).removeClass('loaded');
        $(this).parent().find('.product').slice(GOODS_INDEX).hide();
        $(this).text('Показать все').attr('title', 'Показать все');
      }else{ 
        $(this).parent().find('.product').slice(GOODS_INDEX).show(); 
        $(this).addClass('loaded');
        $(this).text('Скрыть').attr('title', 'Скрыть');
      }
    })
  // Вкладки категорий (загрузка товаров)
  $('.pdt-nav__item._ajax').on('click', function(){
    var $item = $(this);
    var id = $item.data('href');
    var href = $item.data('goods-href');
    
    if($item.hasClass('_loaded') || $item.hasClass('_load')){
      return;
    }
    if(href){
      try {
        href = new URL(href).pathname
      } catch(e) {
        console.error('Ошибка ' + e.name + ":" + e.message);
      }      
    }
    // console.log(href)
    $.ajax({
      url: href,
      beforeSend: function(){
        preloadShow($('.pdt-content .preloader'));
        $item.addClass('_load');
      },
      success: function(d){
        var $parentGridContainer = $('.products-container.' + id).find('.row');
        var $data = $(d);
        var itemsLength = $data.find('.products-grid .product').length;
        
        $data.find(".mouseHoverImgCarousel").HoverMouseCarousel();
        var $newProducts = $data.find('.products-grid');
        $parentGridContainer.append($newProducts);
        
        if(itemsLength > GOODS_INDEX){
          $parentGridContainer.after($('<button class="button _grey _products-show-all">Показать все</button>'))
        }
        
        lozad().observe();
       
        addCart();
        quickView();
        quantity();
          
        preloadHide($('.pdt-content .preloader'), true)
        $item.addClass('_loaded');
        $item.removeClass('_load');
      }
    })
    return false;
  })    
  // Если не добавлены товары на главной, а только товары из категорий
  if(indexGoodsEmpty){
    $('.pdt-nav__item._ajax').first().trigger('click');
  }
  // Счётчик даты в акциях
  $(function(){counterDate()})  
}

// Предзагрузчик
function preloadHide(currentPreloader, nodelay) {
  var $preloader = currentPreloader || $('.preloader'),
  $spinner = $preloader.find('.content-loading');
  $spinner.fadeOut();
  $preloader.delay(nodelay || 500).fadeOut('slow');
}

function preloadShow(currentPreloader) {
  var $preloader = currentPreloader || $('.preloader'),
  $spinner = $preloader.find('.content-loading');
  $spinner.show();
  $preloader.show();
}


// Загрузка основных функций шаблона
$(function(){
  mainFunctions();
  addCart();
  quantity();
  quickView();
  quickViewMod();
  // Запуск Избранное & Сравнение
  // addTo();
});

// Запуск основных функций для разных разрешений экрана
$(function(){
  if(getClientWidth() > 767){
    
  }
  // Запуск функций при изменении экрана
  $(window).resize(function(){
    if(getClientWidth() > 767){

    }
  });
});

// Наверх
$(function(){
	// fade in #back-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').addClass('_active');
		} else {
			$('#back-top').removeClass('_active');
		}
	});
	// scroll body to 0px on click
	$('#back-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
// Модальное окно
$(function(){
  function modal() {
    if(!$.cookie('modal')){
      // Если cookie не установлено появится окно с задержкой 3 секунды
      var delay = 3000;
      var data = $("#fancybox-popup").html();
      setTimeout(function(){
        $.fancybox.open(data, {
          autoSize: true,
          maxWidth: 700,
          padding: 15,
        });       
      }, delay)
      
     // Запоминаем в куках, что посетитель уже заходил
     $.cookie('modal', true, {
      // Время хранения cookie в днях
       expires: 1,
       path: '/'
     });    
    }
  }  
  // Уберите комментарии // со строчек ниже для запуска
  // modal();
})

// Отсчет даты до окончания акции
function counterDate() {
  // Устанавливаем дату обратного отсчета ММ-ДД-ГГ
  $('.ico._sale-counter').each(function(i, el){
    var end = $(el).attr('end');
    var countDownDate = new Date(end).getTime();
    // Обновление счетчика каждую секунду
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Вывод
      $(el).find('.days span').text(days);
      $(el).find('.hours span').text(hours);
      $(el).find('.minutes span').text(minutes);
      $(el).find('.seconds span').text(seconds);
      // Счетчик завершен
      if (distance < 0) {
        clearInterval(x);
        $(el).find('span').text("0");
      }
    }, 1000);
  })
}