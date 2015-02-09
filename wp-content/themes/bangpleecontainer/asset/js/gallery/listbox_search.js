/**
 * Created with JetBrains PhpStorm.
 * User: SOURCECODE-Developer
 * Date: 1/28/13
 * Time: 5:19 PM
 * To change this template use File | Settings | File Templates.
 */
(function( $ ) {
    $.widget( "ui.combobox", {
        _create: function() {
            var input,
                that = this,
                wasOpen = false,
                select = this.element.hide(),
                selected = select.children( ":selected" ),
                value = selected.val() ? selected.text() : "",
                wrapper = this.wrapper = $( "<span>" )
                    .addClass( "ui-combobox" )
                    .insertAfter( select );

            function removeIfInvalid( element ) {
                var value = $( element ).val(),
                    matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( value ) + "$", "i" ),
                    valid = false;
                select.children( "option" ).each(function() {
                    if ( $( this ).text().match( matcher ) ) {
                        this.selected = valid = true;
                        return false;
                    }
                });

                if ( !valid ) {
                    // remove invalid value, as it didn't match anything
                    $( element )
                        .val( "" )
                        .attr( "title", value + " ไม่มีข้อมูลที่ท่านต้องการ" )
                        .tooltip( "open" );
                    select.val( "" );
                    setTimeout(function() {
                        input.tooltip( "close" ).attr( "title", "" );
                    }, 2500 );
                    input.data( "ui-autocomplete" ).term = "";
                }
            }

            input = $( "<input>" )
                .appendTo( wrapper )
                .val( value )
                .attr( "title", "" )
                .addClass( "ui-state-default ui-combobox-input" )
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: function( request, response ) {
                        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
                        response( select.children( "option" ).map(function() {
                            var text = $( this ).text();
                            if ( this.value && ( !request.term || matcher.test(text) ) )
                                return {
                                    label: text.replace(
                                        new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)(" +
                                                $.ui.autocomplete.escapeRegex(request.term) +
                                                ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                        ), "<strong>$1</strong>" ),
                                    value: text,
                                    option: this
                                };
                        }) );
                    },
                    select: function( event, ui ) {
                        ui.item.option.selected = true;
                        that._trigger( "selected", event, {
                            item: ui.item.option
                        });
                    },
                    change: function( event, ui ) {
                        if ( !ui.item ) {
                            removeIfInvalid( this );
                        }
                    }
                })
                .addClass( "ui-widget ui-widget-content ui-corner-left" );

            input.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
                return $( "<li>" )
                    .append( "<a>" + item.label + "</a>" )
                    .appendTo( ul );
            };

            $( "<a>" )
                .attr( "tabIndex", -1 )
                .attr( "title", "แสดงข้อมูลทั้งหมด" )
                .tooltip()
                .appendTo( wrapper )
                .button({
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    },
                    text: false
                })
                .removeClass( "ui-corner-all" )
                .addClass( "ui-corner-right ui-combobox-toggle" )
                .mousedown(function() {
                    wasOpen = input.autocomplete( "widget" ).is( ":visible" );
                })
                .click(function() {
                    input.focus();

                    // close if already visible
                    if ( wasOpen ) {
                        return;
                    }

                    // pass empty string as value to search for, displaying all results
                    input.autocomplete( "search", "" );
                });

            input.tooltip({
                tooltipClass: "ui-state-highlight"
            });
        },

        _destroy: function() {
            this.wrapper.remove();
            this.element.show();
        }
    });
})( jQuery );

$(function() {
    $( "#combobox" ).combobox();
    $( "#toggle" ).click(function() {
        $( "#combobox" ).toggle();
    });
});