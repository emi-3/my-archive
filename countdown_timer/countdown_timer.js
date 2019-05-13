/*
https://blog.universe-web.jp/1484/
*/
            function CountdownTimer(elm, tl, mes) {
                this.initialize.apply(this, arguments);
            }
            CountdownTimer.prototype = {
                initialize: function (elm, tl, mes) {
                    this.elem = document.getElementById(elm);
                    this.tl = tl;
                    this.mes = mes;
                }, countDown: function () {
                    var timer = '';
                    var today = new Date();
                    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
                    var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                    var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
                    var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
                    var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
                    var me = this;
 
                    if ((this.tl - today) > 0) {
                        if (day)
                            timer += '<span class="count_font">' + day + '<font size="5">日</font></span>';
                        if (hour)
                            timer += '<span class="count_font">' + hour + '<font size="4">時間</font></span>';
                        timer += '<span class="count_font">' + this.addZero(min) + '<font size="4">分</font></span><span class="count_font">' + this.addZero(sec) + '<font size="5">秒</font></span><span class="count_font">' + this.addZero(milli) + '</span>';
                        this.elem.innerHTML = timer;
                        tid = setTimeout(function () {
                            me.countDown();
                        }, 10);
                    } else {
                        this.elem.innerHTML = this.mes;
                        return;
                    }
                }, addZero: function (num) {
                    return ('0' + num).slice(-2);
                }
            }
            function CDT() {
                var tl = new Date('2019/8/21 01:59:00');// ここで日付を指定
                var timer = new CountdownTimer('CDT', tl, '終了しました');
                timer.countDown();
            }
            window.onload = function () {
                CDT();
            }
