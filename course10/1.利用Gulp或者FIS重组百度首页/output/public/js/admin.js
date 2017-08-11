/**
 * 后台处理
 */
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();

    //添加新闻
    $("#btnsubmit").click(function(e) {
            e.preventDefault();
            if ($('#newstitle').val() == "" || $('#newsimg').val() == "" || $('#newstime').val() == "" || $('#newssrc').val() == "") {
                if ($('#newstitle').val() == "") {
                    $('#newstitle').parent().addClass('has-error');
                } else {
                    $('#newstitle').parent().removeClass('has-error');
                }
                if ($('#newsimg').val() == "") {
                    $('#newsimg').parent().addClass('has-error');
                } else {
                    $('#newsimg').parent().removeClass('has-error');
                }

                if ($('#newstime').val() == "") {
                    $('#newstime').parent().addClass('has-error');
                } else {
                    $('#newstime').parent().removeClass('has-error');
                }
                if ($('#newssrc').val() == "") {
                    $('#newssrc').parent().addClass('has-error');
                } else {
                    $('#newssrc').parent().removeClass('has-error');
                }
            } else {
                //提交
                var jsonNews = {
                    'newstitle': $('#newstitle').val(),
                    'newstype': $('#newstype').val(),
                    'newsimg': $('#newsimg').val(),
                    'newstime': $('#newstime').val(),
                    'newssrc': $('#newssrc').val()
                }

                $.ajax({
                    url: 'admin/insert',
                    type: 'post',
                    data: jsonNews,
                    datatype: 'json',
                    success: function(data) {
                        console.log(data);
                        clrForm();
                        refreshNews();
                    }
                })
            }
        })
        //清空表单内容
    function clrForm() {
        $('#newstitle').val('');
        $('#newsimg').val('');
        $('#newstime').val('');
        $('#newssrc').val('');

    }
    //  删除新闻
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: 'admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                datatype: 'json',
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            })
        }
        //$('#deleteModal').modal('hide');
        //refreshNews();
    })

    //  修改新闻
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();

        $.ajax({
            url: 'admin/curnews',
            type: 'get',
            datetype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                //$('#unewstime').val(data[0].newstime);

                $('#unewssrc').val(data[0].newssrc);
                //把时间字符串转换为时间类型
                var utime = data[0].newstime.split('T')[0];

                console.log(utime);
                $('#unewstime').val(utime);
                //$('#unewstime').val('2017-08-08 12:00:08');
                //$('#updateModal').modal('hide');
                //refreshNews();
            }

        })


    });

    $('#updateModal #confirmUpdate').click(function(e) {

        $.ajax({
            url: 'admin/update',
            type: 'post',
            datatype: 'json',
            data: {
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newstime: $('#unewstime').val(),
                newssrc: $('#unewssrc').val(),
                id: updateId
            },
            success: function(data) {
                console.log(1);
                $('#updateModal').modal('hide');
                refreshNews();
            }
        });

        /*console.log(1);
        $('#updateModal').modal('hide');
        refreshNews();*/
    });
    //刷新
    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: 'admin/getallnews',
            datatype: 'json',

            success: function(data) {
                console.log(data);


                data.forEach(function(item, index, array) {
                    //data.each(function(index,item){
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);

                    var $tdtime = $('<td>').html(formatDate(item.newstime));
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndeldte = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndeldte);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                })
            }
        });
    }
});

//时间格式转换,2017-05-02T17:07:16.000Z转换为：2017-5-3 01:07:16
function formatDate(curdate) {

    var ts = new Date(curdate);
    var localts = ts.toLocaleString();
    return localts;
}
