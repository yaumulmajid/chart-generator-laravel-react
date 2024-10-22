<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return file_get_contents(public_path('react/public/index.html'));
})->where('any', '.*');

Route::get('/symlink', function () {
    $result = Artisan::call('storage:link');
    
    if ($result === 0) {
        return 'Storage linked successfully!';
    } else {
        return 'Failed to link storage. Please check the logs for details.';
    }
});
